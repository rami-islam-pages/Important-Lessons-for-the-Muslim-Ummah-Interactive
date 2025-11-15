# Interactive Notes & Highlighting System

## Features Implemented

### 📝 General Notes
- **Add Notes**: Click the "Add General Note" button to create standalone notes
- **Edit Notes**: Click the ✏️ icon to edit any existing note
- **Delete Notes**: Click the 🗑️ icon to remove notes
- **Timestamps**: All notes are automatically timestamped

### 🖍️ Text Highlighting
- **5 Highlight Colors**: Yellow, Green, Blue, Pink, Orange
- **Easy Highlighting**: Select any text in the lesson → Click "Highlight"
- **Remove Highlights**: Click on any highlighted text to remove it
- **Visual Color Picker**: Choose your highlight color before selecting text

### 📌 Selection Notes
- **Contextual Notes**: Select text → Click "Add Note" to attach a note to specific content
- **View Context**: Notes show the text they're attached to

### 💾 Automatic Saving
- All notes and highlights are saved to **localStorage**
- Data persists across browser sessions
- No login required (currently stored locally)

## How to Use

### Opening the Notes Panel
1. Click the **📝 Notes** button in the top navigation
2. Or use keyboard shortcut: `Ctrl/Cmd + Shift + N`

### Creating a General Note
1. Open the notes panel
2. Click **"+ Add General Note"**
3. Type your note in the prompt
4. Click OK to save

### Highlighting Text
1. Switch to the **"Highlights"** tab
2. Choose your preferred highlight color
3. Select any text in the lesson
4. Click **"🖍️ Highlight"** in the popup menu
5. The text is now highlighted and saved

### Adding a Note to Selected Text
1. Select any text in the lesson
2. Click **"📝 Add Note"** in the popup menu
3. Type your note in the modal
4. Click **"Save Note"**

### Managing Notes
- **Edit**: Click the ✏️ icon on any note
- **Delete**: Click the 🗑️ icon on any note
- **View**: Switch between "General Notes" and "Highlights" tabs

### Keyboard Shortcuts
- `Ctrl/Cmd + Shift + N`: Toggle notes panel
- `Escape`: Close notes panel or modal

## Future Enhancements (Planned)

### 🔐 User Authentication
- Login/signup system
- Cloud storage for notes
- Access notes from any device
- Share notes with study groups

### 📊 Advanced Features
- Export notes as PDF/Markdown
- Search within notes
- Tag/categorize notes
- Note templates
- Collaborative notes

### 🎨 Enhanced Organization
- Folders for notes
- Filter by date/color/tag
- Sort options
- Archive old notes

## Technical Details

### Storage
- **localStorage** (current implementation)
- Storage keys:
  - `lessonNotes`: Stores all general and selection notes
  - `lessonHighlights`: Stores highlight data

### Data Structure
```javascript
{
  general: [
    {
      id: timestamp,
      text: "note content",
      timestamp: "date/time",
      type: "general" | "selection",
      selectionText: "optional selected text"
    }
  ],
  highlights: [
    {
      id: timestamp,
      text: "highlighted text",
      color: "yellow" | "green" | "blue" | "pink" | "orange",
      timestamp: "date/time"
    }
  ]
}
```

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support (responsive design)

## Notes on Current Limitations

1. **Local Storage Only**: Notes are stored in browser's localStorage
   - Limited to ~5-10MB per domain
   - Data is browser/device specific
   - Clearing browser data will delete notes

2. **No Cross-Device Sync**: Notes are not synced across devices (yet)

3. **No Backup**: Users should manually export important notes

## Coming Soon
- User authentication system
- Cloud storage integration
- Cross-device synchronization
- Note sharing capabilities
