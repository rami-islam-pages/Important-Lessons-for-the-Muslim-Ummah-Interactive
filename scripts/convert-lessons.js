#!/usr/bin/env node
/**
 * Converts lesson HTML files to JSX content components.
 * Reads from /lessons/*.html, writes to /src/content/lessons/*.tsx
 */

const fs = require('fs');
const path = require('path');

const LESSONS_DIR = path.join(__dirname, '..', 'lessons');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'content', 'lessons');

// Ensure output dir exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function escapeJsx(text) {
  // Escape curly braces for JSX
  return text.replace(/\{/g, "{'{'}")
             .replace(/\}/g, "{'}'}")
             .replace(/`/g, "{'`'}");
}

function escapeAttr(text) {
  // Escape for JSX string attributes
  return text.replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#39;/g, "'")
             .replace(/&nbsp;/g, ' ')
             .replace(/"/g, '\\"')
             .replace(/\n/g, ' ')
             .trim();
}

function extractText(html) {
  // Strip HTML tags and get text content
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').trim();
}

function convertAyahBox(html) {
  const headerMatch = html.match(/<div\s+class="ayah-header">([\s\S]*?)<\/div>/);
  const arabicMatch = html.match(/<div\s+class="ayah-arabic">([\s\S]*?)<\/div>/);
  const translationMatch = html.match(/<div\s+class="ayah-translation">([\s\S]*?)<\/div>/);
  const linkMatch = html.match(/<a[^>]+href="([^"]+)"[^>]*class="ayah-link"/);

  const header = headerMatch ? escapeAttr(extractText(headerMatch[1])) : '';
  const arabic = arabicMatch ? escapeAttr(extractText(arabicMatch[1])) : '';

  let translation = '';
  let translator = '';

  if (translationMatch) {
    const transHtml = translationMatch[1];
    const translatorMatch = transHtml.match(/<span\s+class="translator">[—–-]*\s*(.*?)<\/span>/);
    if (translatorMatch) {
      translator = escapeAttr(extractText(translatorMatch[1]));
      translation = escapeAttr(extractText(transHtml.replace(/<span\s+class="translator">[\s\S]*?<\/span>/, '').replace(/<br\s*\/?>/g, '')));
    } else {
      translation = escapeAttr(extractText(transHtml));
    }
  }

  const link = linkMatch ? linkMatch[1] : '';

  let result = `      <AyahBox\n        header="${header}"\n        arabic="${arabic}"\n        translation="${translation}"`;
  if (translator) result += `\n        translator="${translator}"`;
  if (link) result += `\n        link="${link}"`;
  result += `\n      />`;

  return result;
}

function convertContentGrid(html, variant) {
  const items = [];
  const itemRegex = /<div\s+class="box-(?:item|content)"[^>]*>([\s\S]*?)<\/div>/g;
  let match;

  // For box-item > box-content structure
  const boxItemRegex = /<div\s+class="box-item">([\s\S]*?)<\/div>\s*(?=<div\s+class="box-item">|$)/g;

  while ((match = boxItemRegex.exec(html)) !== null) {
    const itemHtml = match[1];
    const numberMatch = itemHtml.match(/<div\s+class="box-number">([\s\S]*?)<\/div>/);
    const contentMatch = itemHtml.match(/<div\s+class="box-content">([\s\S]*?)<\/div>/);

    const item = {};
    if (numberMatch) item.number = escapeAttr(extractText(numberMatch[1]));
    if (contentMatch) item.content = escapeAttr(extractText(contentMatch[1]));
    else item.content = escapeAttr(extractText(itemHtml));

    items.push(item);
  }

  if (items.length === 0) {
    // Fallback: just get box-content divs
    const contentRegex = /<div\s+class="box-content">([\s\S]*?)<\/div>/g;
    while ((match = contentRegex.exec(html)) !== null) {
      items.push({ content: escapeAttr(extractText(match[1])) });
    }
  }

  const itemStrs = items.map(item => {
    let str = `{ content: "${item.content}"`;
    if (item.number) str += `, number: "${item.number}"`;
    str += ' }';
    return str;
  });

  return `      <ContentGrid variant="${variant}" items={[\n        ${itemStrs.join(',\n        ')}\n      ]} />`;
}

function convertCategoryGrid(html) {
  const items = [];
  const catRegex = /<div\s+class="category-box\s*([^"]*)">([\s\S]*?)<\/div>\s*(?=<div\s+class="category-box|$)/g;
  let match;

  while ((match = catRegex.exec(html)) !== null) {
    const variant = match[1].trim();
    const catHtml = match[2];
    const titleMatch = catHtml.match(/<h3\s+class="category-title">([\s\S]*?)<\/h3>/);
    const descMatch = catHtml.match(/<p\s+class="category-desc">([\s\S]*?)<\/p>/);

    const item = {
      title: titleMatch ? escapeAttr(extractText(titleMatch[1])) : '',
      description: descMatch ? escapeAttr(extractText(descMatch[1])) : '',
    };
    if (variant) item.variant = variant;

    items.push(item);
  }

  const itemStrs = items.map(item => {
    let str = `{ title: "${item.title}", description: "${item.description}"`;
    if (item.variant) str += `, variant: "${item.variant}" as const`;
    str += ' }';
    return str;
  });

  return `      <ContentGrid variant="three-category" items={[\n        ${itemStrs.join(',\n        ')}\n      ]} />`;
}

function convertNegligenceGrid(html) {
  const items = [];
  const itemRegex = /<div\s+class="negligence-item">([\s\S]*?)<\/div>/g;
  let match;
  while ((match = itemRegex.exec(html)) !== null) {
    items.push({ content: escapeAttr(extractText(match[1])) });
  }
  const itemStrs = items.map(i => `{ content: "${i.content}" }`);
  return `      <ContentGrid variant="negligence-items" items={[\n        ${itemStrs.join(',\n        ')}\n      ]} />`;
}

function convertTwoColumnTable(html) {
  const columns = [];
  const colRegex = /<div\s+class="table-column">([\s\S]*?)<\/div>\s*(?=<div\s+class="table-column">|$)/g;
  let match;
  while ((match = colRegex.exec(html)) !== null) {
    const colHtml = match[1];
    const titleMatch = colHtml.match(/<h3>([\s\S]*?)<\/h3>/);
    const contentMatch = colHtml.match(/<p>([\s\S]*?)<\/p>/);
    columns.push({
      title: titleMatch ? escapeAttr(extractText(titleMatch[1])) : '',
      content: contentMatch ? escapeAttr(extractText(contentMatch[1])) : '',
    });
  }
  const colStrs = columns.map(c => `{ title: "${c.title}", content: "${c.content}" }`);
  return `      <ComparisonTable columns={[\n        ${colStrs.join(',\n        ')}\n      ]} />`;
}

function convertTashahhudBox(html) {
  const titleMatch = html.match(/<h3>([\s\S]*?)<\/h3>/);
  const arabicMatch = html.match(/<p\s+class="arabic-text"[^>]*>([\s\S]*?)<\/p>/);
  const translitMatch = html.match(/<p\s+class="transliteration">([\s\S]*?)<\/p>/);
  const transMatch = html.match(/<p\s+class="translation">([\s\S]*?)<\/p>/);

  const title = titleMatch ? escapeAttr(extractText(titleMatch[1])) : '';
  const arabic = arabicMatch ? escapeAttr(extractText(arabicMatch[1])) : '';

  let transliteration = '';
  if (translitMatch) {
    transliteration = escapeAttr(extractText(translitMatch[1]).replace(/^Transliteration:\s*/i, ''));
  }

  let translation = '';
  if (transMatch) {
    translation = escapeAttr(extractText(transMatch[1]).replace(/^Translation:\s*/i, ''));
  }

  let result = `      <DuaBox\n        title="${title}"`;
  if (arabic) result += `\n        arabic="${arabic}"`;
  if (transliteration) result += `\n        transliteration="${transliteration}"`;
  if (translation) result += `\n        translation="${translation}"`;
  result += `\n      />`;

  return result;
}

function convertLessonText(html) {
  const lines = [];
  let usedComponents = new Set();

  // Process the HTML block by block
  // Split by major div blocks while preserving content

  // Replace ayah-boxes
  html = html.replace(/<div\s+class="ayah-box">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, (match) => {
    usedComponents.add('AyahBox');
    return '\n' + convertAyahBox(match) + '\n';
  });

  // Also try simpler ayah-box closing
  html = html.replace(/<div\s+class="ayah-box">([\s\S]*?)(?:<\/div>\s*){2,5}(?=\s*(?:<div|<h2|<p|$))/g, (match) => {
    if (match.includes('AyahBox')) return match; // already converted
    usedComponents.add('AyahBox');
    return '\n' + convertAyahBox(match) + '\n';
  });

  // Replace tashahhud-box
  html = html.replace(/<div\s+class="tashahhud-box">([\s\S]*?)<\/div>\s*<\/div>/g, (match) => {
    usedComponents.add('DuaBox');
    return '\n' + convertTashahhudBox(match) + '\n';
  });

  // Replace five-box-grid
  html = html.replace(/<div\s+class="five-box-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g, (match) => {
    usedComponents.add('ContentGrid');
    return '\n' + convertContentGrid(match, 'five-box') + '\n';
  });

  // Replace four-box-grid
  html = html.replace(/<div\s+class="four-box-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g, (match) => {
    usedComponents.add('ContentGrid');
    return '\n' + convertContentGrid(match, 'four-box') + '\n';
  });

  // Replace three-categories-grid
  html = html.replace(/<div\s+class="three-categories-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g, (match) => {
    usedComponents.add('ContentGrid');
    return '\n' + convertCategoryGrid(match) + '\n';
  });

  // Replace negligence-items-grid
  html = html.replace(/<div\s+class="negligence-items-grid">([\s\S]*?)<\/div>\s*<\/div>/g, (match) => {
    usedComponents.add('ContentGrid');
    return '\n' + convertNegligenceGrid(match) + '\n';
  });

  // Replace two-column-table
  html = html.replace(/<div\s+class="two-column-table">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g, (match) => {
    usedComponents.add('ComparisonTable');
    return '\n' + convertTwoColumnTable(match) + '\n';
  });

  // Replace bismillah-lesson
  html = html.replace(/<div\s+class="bismillah-lesson">[^<]*<\/div>/g, () => {
    usedComponents.add('BismillahHeader');
    return '\n      <BismillahHeader />\n';
  });

  // Replace section-titles
  html = html.replace(/<h2\s+class="section-title">([\s\S]*?)<\/h2>/g, (match, content) => {
    usedComponents.add('SectionTitle');
    // Handle tooltip-word inside section title
    let processedContent = content.replace(
      /<span\s+class="tooltip-word"\s+data-tooltip="([^"]*)">([\s\S]*?)<\/span>/g,
      (m, tooltip, term) => {
        usedComponents.add('TooltipTerm');
        return `<TooltipTerm term="${escapeAttr(term)}" definition="${escapeAttr(tooltip)}" />`;
      }
    );
    processedContent = extractText(processedContent.replace(/<TooltipTerm[^/]*\/>/g, (m) => `___KEEP_${m}_KEEP___`));
    processedContent = processedContent.replace(/___KEEP_(.*?)_KEEP___/g, '$1');
    if (!processedContent.includes('<TooltipTerm')) {
      processedContent = escapeAttr(processedContent);
    }
    return `\n      <SectionTitle>${processedContent}</SectionTitle>\n`;
  });

  // Replace tooltip-word in paragraphs
  html = html.replace(
    /<span\s+class="tooltip-word"\s+data-tooltip="([^"]*)">([\s\S]*?)<\/span>/g,
    (match, tooltip, term) => {
      usedComponents.add('TooltipTerm');
      return `<TooltipTerm term="${escapeAttr(extractText(term))}" definition="${escapeAttr(tooltip)}" />`;
    }
  );

  // Fix HTML to JSX
  html = html.replace(/class="/g, 'className="');
  html = html.replace(/<br>/g, '<br />');
  html = html.replace(/<br >/g, '<br />');
  html = html.replace(/<input ([^>]*)>/g, '<input $1 />');
  html = html.replace(/<img ([^>]*)>/g, '<img $1 />');
  html = html.replace(/<hr>/g, '<hr />');
  html = html.replace(/\bfor="/g, 'htmlFor="');

  // Remove remaining non-JSX divs (quran-types-container, etc.)
  html = html.replace(/<div\s+className="quran-types-container">/g, '<div>');

  // Skip question blocks (they'll be in quiz files)
  html = html.replace(/<div\s+className="question">([\s\S]*?)<\/div>/g, '');

  // Remove style attributes with JSX incompatible syntax
  html = html.replace(/\s+style="[^"]*"/g, '');

  return { content: html.trim(), usedComponents };
}

function processLesson(filename) {
  const filePath = path.join(LESSONS_DIR, filename);
  const html = fs.readFileSync(filePath, 'utf8');

  // Extract lesson-text content
  const lessonTextMatch = html.match(/<div\s+class="lesson-text">([\s\S]*?)<\/div>\s*<\/article>/);
  if (!lessonTextMatch) {
    console.warn(`  Could not find lesson-text in ${filename}`);
    return;
  }

  let lessonText = lessonTextMatch[1];

  // Determine output filename
  let outputName;
  if (filename === 'explanation-of-intro.html') {
    outputName = 'intro';
  } else {
    const numMatch = filename.match(/lesson-(\d+)/);
    if (!numMatch) return;
    outputName = `lesson-${numMatch[1]}`;
  }

  // If file already exists and has substantial content, skip
  const outputPath = path.join(OUTPUT_DIR, `${outputName}.tsx`);
  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath, 'utf8');
    if (existing.length > 500) {
      console.log(`  Skipping ${outputName} (already exists with ${existing.length} bytes)`);
      return;
    }
  }

  const { content, usedComponents } = convertLessonText(lessonText);

  // Build component name
  const componentName = outputName === 'intro'
    ? 'IntroContent'
    : `Lesson${outputName.replace('lesson-', '').padStart(2, '0')}Content`;

  // Build imports
  const imports = [];
  if (usedComponents.has('SectionTitle')) imports.push("import { SectionTitle } from '@/components/content/SectionTitle'");
  if (usedComponents.has('AyahBox')) imports.push("import { AyahBox } from '@/components/content/AyahBox'");
  if (usedComponents.has('ContentGrid')) imports.push("import { ContentGrid } from '@/components/content/ContentGrid'");
  if (usedComponents.has('ComparisonTable')) imports.push("import { ComparisonTable } from '@/components/content/ComparisonTable'");
  if (usedComponents.has('DuaBox')) imports.push("import { DuaBox } from '@/components/content/DuaBox'");
  if (usedComponents.has('TooltipTerm')) imports.push("import { TooltipTerm } from '@/components/content/TooltipTerm'");
  if (usedComponents.has('BismillahHeader')) imports.push("import { BismillahHeader } from '@/components/content/BismillahHeader'");

  const tsx = `${imports.join('\n')}\n\nexport default function ${componentName}() {\n  return (\n    <>\n${content}\n    </>\n  )\n}\n`;

  fs.writeFileSync(outputPath, tsx);
  console.log(`  Written ${outputName}.tsx (${tsx.length} bytes)`);
}

// Process all lesson files
console.log('Converting lesson HTML to JSX...\n');

const files = fs.readdirSync(LESSONS_DIR).filter(f => f.endsWith('.html') && !f.includes('questions'));
files.sort();

for (const file of files) {
  console.log(`Processing ${file}...`);
  try {
    processLesson(file);
  } catch (err) {
    console.error(`  Error processing ${file}: ${err.message}`);
  }
}

console.log('\nDone!');
