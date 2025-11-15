// ========================================
// NOTES SYSTEM - Interactive Note Taking & Highlighting
// ========================================

// Storage keys
const NOTES_STORAGE_KEY = 'lessonNotes';
const HIGHLIGHTS_STORAGE_KEY = 'lessonHighlights';

// Current state
let currentHighlightColor = 'yellow';
let notesData = {
    general: [],
    highlights: []
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadNotesFromStorage();
    setupTextSelection();
    renderGeneralNotes();
    renderHighlights();
});

// ========================================
// PANEL TOGGLE
// ========================================
function toggleNotesPanel() {
    const panel = document.getElementById('notesPanel');
    panel.classList.toggle('open');
}

// ========================================
// TABS SWITCHING
// ========================================
function switchNotesTab(tabName) {
    // Remove active class from all tabs
    document.querySelectorAll('.notes-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.notes-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to selected tab
    event.target.classList.add('active');
    
    if (tabName === 'general') {
        document.getElementById('generalNotesTab').classList.add('active');
    } else if (tabName === 'highlights') {
        document.getElementById('highlightsTab').classList.add('active');
    }
}

// ========================================
// GENERAL NOTES
// ========================================
function addGeneralNote() {
    const noteText = prompt('Enter your note:');
    if (noteText && noteText.trim()) {
        const note = {
            id: Date.now(),
            text: noteText.trim(),
            timestamp: new Date().toLocaleString(),
            type: 'general'
        };
        
        notesData.general.push(note);
        saveNotesToStorage();
        renderGeneralNotes();
    }
}

function editGeneralNote(noteId) {
    const note = notesData.general.find(n => n.id === noteId);
    if (note) {
        const newText = prompt('Edit your note:', note.text);
        if (newText && newText.trim()) {
            note.text = newText.trim();
            note.timestamp = new Date().toLocaleString() + ' (edited)';
            saveNotesToStorage();
            renderGeneralNotes();
        }
    }
}

function deleteGeneralNote(noteId) {
    if (confirm('Are you sure you want to delete this note?')) {
        notesData.general = notesData.general.filter(n => n.id !== noteId);
        saveNotesToStorage();
        renderGeneralNotes();
    }
}

function renderGeneralNotes() {
    const container = document.getElementById('generalNotesList');
    
    if (notesData.general.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888; font-style: italic;">No notes yet. Click "Add General Note" to get started!</p>';
        return;
    }
    
    container.innerHTML = notesData.general.map(note => `
        <div class="note-item">
            <div class="note-item-header">
                <span class="note-timestamp">${note.timestamp}</span>
                <div class="note-actions">
                    <button class="note-action-btn edit-btn" onclick="editGeneralNote(${note.id})" title="Edit">✏️</button>
                    <button class="note-action-btn delete-btn" onclick="deleteGeneralNote(${note.id})" title="Delete">🗑️</button>
                </div>
            </div>
            <div class="note-content">${escapeHtml(note.text)}</div>
        </div>
    `).join('');
}

// ========================================
// TEXT SELECTION & HIGHLIGHTING
// ========================================
function setupTextSelection() {
    const lessonContent = document.querySelector('.lesson-text');
    if (!lessonContent) return;
    
    lessonContent.addEventListener('mouseup', handleTextSelection);
    
    // Restore highlights from storage
    restoreHighlights();
}

function handleTextSelection() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText.length > 0) {
        // Show options: highlight or add note
        showSelectionMenu(selection, selectedText);
    }
}

function showSelectionMenu(selection, text) {
    // Remove any existing menu
    const existingMenu = document.querySelector('.selection-menu');
    if (existingMenu) existingMenu.remove();
    
    // Create menu
    const menu = document.createElement('div');
    menu.className = 'selection-menu';
    menu.innerHTML = `
        <button onclick="highlightSelection('${currentHighlightColor}')">🖍️ Highlight</button>
        <button onclick="openNoteModalForSelection()">📝 Add Note</button>
    `;
    
    // Position menu near selection
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    menu.style.cssText = `
        position: fixed;
        top: ${rect.top - 50}px;
        left: ${rect.left}px;
        background: white;
        border: 2px solid var(--gold);
        border-radius: 6px;
        padding: 8px;
        display: flex;
        gap: 8px;
        z-index: 1500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    menu.querySelectorAll('button').forEach(btn => {
        btn.style.cssText = `
            padding: 6px 12px;
            background: var(--gold);
            color: var(--darker-green);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-family: 'Amiri', serif;
            font-size: 0.9rem;
            transition: all 0.2s ease;
        `;
    });
    
    document.body.appendChild(menu);
    
    // Remove menu when clicking elsewhere
    setTimeout(() => {
        document.addEventListener('click', function removeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', removeMenu);
            }
        });
    }, 100);
}

function selectHighlightColor(color) {
    currentHighlightColor = color;
    
    // Update active color button
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.color-btn.${color}`).classList.add('active');
}

function highlightSelection(color) {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;
    
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();
    
    if (selectedText.length === 0) return;
    
    // Create highlight span
    const span = document.createElement('span');
    span.className = `highlighted ${color}`;
    span.setAttribute('data-highlight-id', Date.now());
    span.title = 'Click to remove highlight';
    
    // Wrap selection
    try {
        range.surroundContents(span);
        
        // Add click to remove
        span.addEventListener('click', function() {
            if (confirm('Remove this highlight?')) {
                const parent = span.parentNode;
                while (span.firstChild) {
                    parent.insertBefore(span.firstChild, span);
                }
                parent.removeChild(span);
                parent.normalize();
                
                // Remove from storage
                const highlightId = span.getAttribute('data-highlight-id');
                notesData.highlights = notesData.highlights.filter(h => h.id != highlightId);
                saveNotesToStorage();
                renderHighlights();
            }
        });
        
        // Save highlight
        const highlight = {
            id: span.getAttribute('data-highlight-id'),
            text: selectedText,
            color: color,
            timestamp: new Date().toLocaleString()
        };
        
        notesData.highlights.push(highlight);
        saveNotesToStorage();
        renderHighlights();
        
        // Clear selection
        selection.removeAllRanges();
        
        // Remove menu
        const menu = document.querySelector('.selection-menu');
        if (menu) menu.remove();
        
    } catch (e) {
        console.error('Could not highlight selection:', e);
        alert('Please select text within a single paragraph to highlight.');
    }
}

function renderHighlights() {
    const container = document.getElementById('highlightsList');
    
    if (notesData.highlights.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888; font-style: italic;">No highlights yet. Select text in the lesson to highlight it!</p>';
        return;
    }
    
    container.innerHTML = notesData.highlights.map(highlight => `
        <div class="note-item">
            <div class="note-item-header">
                <span class="note-timestamp">${highlight.timestamp}</span>
                <div class="note-actions">
                    <span style="width: 20px; height: 20px; background: ${getColorCode(highlight.color)}; border-radius: 50%; display: inline-block;"></span>
                </div>
            </div>
            <div class="note-content">"${escapeHtml(highlight.text)}"</div>
        </div>
    `).join('');
}

function restoreHighlights() {
    // This would restore highlights when the page loads
    // For now, highlights are stored in localStorage and manually reapplied
    // In a full implementation, you'd need to store more context (paragraph ID, offset, etc.)
}

function getColorCode(colorName) {
    const colors = {
        yellow: '#fef08a',
        green: '#bbf7d0',
        blue: '#bfdbfe',
        pink: '#fbcfe8',
        orange: '#fed7aa'
    };
    return colors[colorName] || colors.yellow;
}

// ========================================
// SELECTION NOTES (Notes on specific text)
// ========================================
let currentSelectionRange = null;
let currentSelectionText = '';

function openNoteModalForSelection() {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;
    
    currentSelectionRange = selection.getRangeAt(0);
    currentSelectionText = selection.toString().trim();
    
    if (currentSelectionText.length === 0) return;
    
    // Show modal
    document.getElementById('noteModal').classList.remove('hidden');
    document.getElementById('selectionNoteText').value = '';
    document.getElementById('selectionNoteText').focus();
    
    // Remove selection menu
    const menu = document.querySelector('.selection-menu');
    if (menu) menu.remove();
}

function closeNoteModal() {
    document.getElementById('noteModal').classList.add('hidden');
    currentSelectionRange = null;
    currentSelectionText = '';
}

function saveSelectionNote() {
    const noteText = document.getElementById('selectionNoteText').value.trim();
    
    if (!noteText) {
        alert('Please enter a note.');
        return;
    }
    
    const note = {
        id: Date.now(),
        text: noteText,
        selectionText: currentSelectionText,
        timestamp: new Date().toLocaleString(),
        type: 'selection'
    };
    
    notesData.general.push(note);
    saveNotesToStorage();
    renderGeneralNotes();
    closeNoteModal();
    
    // Clear selection
    window.getSelection().removeAllRanges();
}

// ========================================
// STORAGE (Local Storage)
// ========================================
function saveNotesToStorage() {
    try {
        localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notesData));
    } catch (e) {
        console.error('Could not save notes to localStorage:', e);
    }
}

function loadNotesFromStorage() {
    try {
        const stored = localStorage.getItem(NOTES_STORAGE_KEY);
        if (stored) {
            notesData = JSON.parse(stored);
        }
    } catch (e) {
        console.error('Could not load notes from localStorage:', e);
        notesData = { general: [], highlights: [] };
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Shift + N: Toggle notes panel
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'N') {
        e.preventDefault();
        toggleNotesPanel();
    }
    
    // Escape: Close notes panel or modal
    if (e.key === 'Escape') {
        const panel = document.getElementById('notesPanel');
        const modal = document.getElementById('noteModal');
        
        if (!modal.classList.contains('hidden')) {
            closeNoteModal();
        } else if (panel.classList.contains('open')) {
            toggleNotesPanel();
        }
    }
});
