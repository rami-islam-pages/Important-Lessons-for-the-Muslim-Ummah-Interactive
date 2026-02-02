/**
 * =============================================================================
 * NOTES SYSTEM - Interactive Note Taking & Highlighting
 * Important Lessons for the Muslim Ummah
 * =============================================================================
 * 
 * Features:
 * - General notes for the lesson
 * - Text highlighting with multiple colors
 * - Selection-based notes
 * - Local storage persistence
 * - Keyboard shortcuts
 */

'use strict';

// =============================================================================
// CONFIGURATION
// =============================================================================

const NotesConfig = {
    STORAGE_KEY: 'islamicLessonsNotes',
    HIGHLIGHT_COLORS: {
        yellow: '#fef08a',
        green: '#bbf7d0',
        blue: '#bfdbfe',
        pink: '#fbcfe8',
        orange: '#fed7aa'
    },
    DEFAULT_COLOR: 'yellow'
};

// =============================================================================
// STATE MANAGEMENT
// =============================================================================

const NotesState = {
    currentColor: NotesConfig.DEFAULT_COLOR,
    currentSelectionRange: null,
    currentSelectionText: '',
    data: {
        general: [],
        highlights: []
    },
    
    // Generate unique ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
};

// =============================================================================
// STORAGE HANDLERS
// =============================================================================

const Storage = {
    /**
     * Load notes data from localStorage
     */
    load() {
        try {
            const stored = localStorage.getItem(NotesConfig.STORAGE_KEY);
            if (stored) {
                NotesState.data = JSON.parse(stored);
            }
        } catch (error) {
            console.error('Failed to load notes from storage:', error);
            NotesState.data = { general: [], highlights: [] };
        }
    },
    
    /**
     * Save notes data to localStorage
     */
    save() {
        try {
            localStorage.setItem(NotesConfig.STORAGE_KEY, JSON.stringify(NotesState.data));
        } catch (error) {
            console.error('Failed to save notes to storage:', error);
        }
    }
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

const Utils = {
    /**
     * Escape HTML to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    
    /**
     * Format timestamp for display
     * @param {Date} date - Date object
     * @returns {string} Formatted timestamp
     */
    formatTimestamp(date = new Date()) {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },
    
    /**
     * Get color hex code from name
     * @param {string} colorName - Color name
     * @returns {string} Hex color code
     */
    getColorCode(colorName) {
        return NotesConfig.HIGHLIGHT_COLORS[colorName] || NotesConfig.HIGHLIGHT_COLORS.yellow;
    }
};

// =============================================================================
// PANEL CONTROLLER
// =============================================================================

const PanelController = {
    /**
     * Toggle the notes panel visibility
     */
    toggle() {
        const panel = document.getElementById('notesPanel');
        if (panel) {
            panel.classList.toggle('open');
        }
    },
    
    /**
     * Open the notes panel
     */
    open() {
        const panel = document.getElementById('notesPanel');
        if (panel) {
            panel.classList.add('open');
        }
    },
    
    /**
     * Close the notes panel
     */
    close() {
        const panel = document.getElementById('notesPanel');
        if (panel) {
            panel.classList.remove('open');
        }
    }
};

// =============================================================================
// TAB CONTROLLER
// =============================================================================

const TabController = {
    /**
     * Switch to a specific tab
     * @param {string} tabName - Name of tab ('general' or 'highlights')
     */
    switch(tabName) {
        // Remove active from all tabs
        document.querySelectorAll('.notes-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.notes-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Activate selected tab
        const tabButton = document.querySelector(`[data-tab="${tabName}"]`);
        const tabContent = document.getElementById(`${tabName}NotesTab`) || 
                          document.getElementById(`${tabName}Tab`);
        
        if (tabButton) tabButton.classList.add('active');
        if (tabContent) tabContent.classList.add('active');
    }
};

// =============================================================================
// GENERAL NOTES CONTROLLER
// =============================================================================

const GeneralNotesController = {
    /**
     * Add a new general note
     */
    add() {
        const noteText = prompt('Enter your note:');
        if (noteText?.trim()) {
            const note = {
                id: NotesState.generateId(),
                text: noteText.trim(),
                timestamp: Utils.formatTimestamp(),
                type: 'general'
            };
            
            NotesState.data.general.push(note);
            Storage.save();
            this.render();
        }
    },
    
    /**
     * Edit an existing note
     * @param {string} noteId - ID of note to edit
     */
    edit(noteId) {
        const note = NotesState.data.general.find(n => n.id === noteId);
        if (note) {
            const newText = prompt('Edit your note:', note.text);
            if (newText?.trim()) {
                note.text = newText.trim();
                note.timestamp = Utils.formatTimestamp() + ' (edited)';
                Storage.save();
                this.render();
            }
        }
    },
    
    /**
     * Delete a note
     * @param {string} noteId - ID of note to delete
     */
    delete(noteId) {
        if (confirm('Are you sure you want to delete this note?')) {
            NotesState.data.general = NotesState.data.general.filter(n => n.id !== noteId);
            Storage.save();
            this.render();
        }
    },
    
    /**
     * Render all general notes
     */
    render() {
        const container = document.getElementById('generalNotesList');
        if (!container) return;
        
        if (NotesState.data.general.length === 0) {
            container.innerHTML = `
                <p class="empty-state">
                    No notes yet. Click "Add General Note" to get started!
                </p>
            `;
            return;
        }
        
        container.innerHTML = NotesState.data.general.map(note => `
            <div class="note-item" data-note-id="${note.id}">
                <div class="note-item-header">
                    <span class="note-timestamp">${note.timestamp}</span>
                    <div class="note-actions">
                        <button class="note-action-btn edit-btn" 
                                onclick="GeneralNotesController.edit('${note.id}')" 
                                title="Edit note"
                                aria-label="Edit note">
                            ✏️
                        </button>
                        <button class="note-action-btn delete-btn" 
                                onclick="GeneralNotesController.delete('${note.id}')" 
                                title="Delete note"
                                aria-label="Delete note">
                            🗑️
                        </button>
                    </div>
                </div>
                ${note.selectionText ? `
                    <div class="note-selection-text">"${Utils.escapeHtml(note.selectionText)}"</div>
                ` : ''}
                <div class="note-content">${Utils.escapeHtml(note.text)}</div>
            </div>
        `).join('');
    }
};

// =============================================================================
// HIGHLIGHT CONTROLLER
// =============================================================================

const HighlightController = {
    /**
     * Select a highlight color
     * @param {string} color - Color name
     */
    selectColor(color) {
        NotesState.currentColor = color;
        
        // Update UI
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`.color-btn.${color}`);
        if (activeBtn) activeBtn.classList.add('active');
    },
    
    /**
     * Highlight the current selection
     * @param {string} color - Color name (optional, uses current color)
     */
    highlightSelection(color = NotesState.currentColor) {
        const selection = window.getSelection();
        if (selection.rangeCount === 0) return;
        
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString().trim();
        
        if (selectedText.length === 0) return;
        
        // Create highlight span
        const span = document.createElement('span');
        const highlightId = NotesState.generateId();
        span.className = `highlighted ${color}`;
        span.setAttribute('data-highlight-id', highlightId);
        span.title = 'Click to remove highlight';
        
        try {
            range.surroundContents(span);
            
            // Add click to remove
            span.addEventListener('click', () => this.removeHighlight(span, highlightId));
            
            // Save highlight
            const highlight = {
                id: highlightId,
                text: selectedText,
                color: color,
                timestamp: Utils.formatTimestamp()
            };
            
            NotesState.data.highlights.push(highlight);
            Storage.save();
            this.render();
            
            // Clear selection and menu
            selection.removeAllRanges();
            SelectionMenu.remove();
            
        } catch (error) {
            console.error('Could not highlight selection:', error);
            alert('Please select text within a single element to highlight.');
        }
    },
    
    /**
     * Remove a highlight
     * @param {HTMLElement} span - The highlight span element
     * @param {string} highlightId - ID of the highlight
     */
    removeHighlight(span, highlightId) {
        if (confirm('Remove this highlight?')) {
            const parent = span.parentNode;
            while (span.firstChild) {
                parent.insertBefore(span.firstChild, span);
            }
            parent.removeChild(span);
            parent.normalize();
            
            // Remove from storage
            NotesState.data.highlights = NotesState.data.highlights.filter(h => h.id !== highlightId);
            Storage.save();
            this.render();
        }
    },
    
    /**
     * Render highlights list in panel
     */
    render() {
        const container = document.getElementById('highlightsList');
        if (!container) return;
        
        if (NotesState.data.highlights.length === 0) {
            container.innerHTML = `
                <p class="empty-state">
                    No highlights yet. Select text in the lesson to highlight it!
                </p>
            `;
            return;
        }
        
        container.innerHTML = NotesState.data.highlights.map(highlight => `
            <div class="note-item" data-highlight-id="${highlight.id}">
                <div class="note-item-header">
                    <span class="note-timestamp">${highlight.timestamp}</span>
                    <div class="note-actions">
                        <span class="highlight-color-indicator" 
                              style="background: ${Utils.getColorCode(highlight.color)};">
                        </span>
                    </div>
                </div>
                <div class="note-content">"${Utils.escapeHtml(highlight.text)}"</div>
            </div>
        `).join('');
    }
};

// =============================================================================
// SELECTION MENU
// =============================================================================

const SelectionMenu = {
    /**
     * Show the selection menu
     * @param {Selection} selection - Window selection object
     * @param {string} text - Selected text
     */
    show(selection, text) {
        this.remove(); // Remove any existing menu
        
        const menu = document.createElement('div');
        menu.className = 'selection-menu';
        menu.innerHTML = `
            <button class="selection-menu-btn" data-action="highlight">
                🖍️ Highlight
            </button>
            <button class="selection-menu-btn" data-action="note">
                📝 Add Note
            </button>
        `;
        
        // Position menu
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        menu.style.cssText = `
            position: fixed;
            top: ${Math.max(rect.top - 55, 10)}px;
            left: ${Math.min(Math.max(rect.left, 10), window.innerWidth - 200)}px;
            background: #fffef9;
            border: 2px solid #d4af37;
            border-radius: 8px;
            padding: 8px;
            display: flex;
            gap: 8px;
            z-index: 1500;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        `;
        
        // Add button event listeners
        menu.querySelector('[data-action="highlight"]').addEventListener('click', () => {
            HighlightController.highlightSelection();
        });
        
        menu.querySelector('[data-action="note"]').addEventListener('click', () => {
            NoteModal.openForSelection();
        });
        
        document.body.appendChild(menu);
        
        // Remove when clicking elsewhere
        setTimeout(() => {
            document.addEventListener('click', this.handleOutsideClick);
        }, 100);
    },
    
    /**
     * Handle click outside menu
     * @param {Event} e - Click event
     */
    handleOutsideClick(e) {
        const menu = document.querySelector('.selection-menu');
        if (menu && !menu.contains(e.target)) {
            SelectionMenu.remove();
        }
    },
    
    /**
     * Remove the selection menu
     */
    remove() {
        const existingMenu = document.querySelector('.selection-menu');
        if (existingMenu) {
            existingMenu.remove();
        }
        document.removeEventListener('click', this.handleOutsideClick);
    }
};

// =============================================================================
// NOTE MODAL
// =============================================================================

const NoteModal = {
    /**
     * Open modal for adding note to selection
     */
    openForSelection() {
        const selection = window.getSelection();
        if (selection.rangeCount === 0) return;
        
        NotesState.currentSelectionRange = selection.getRangeAt(0);
        NotesState.currentSelectionText = selection.toString().trim();
        
        if (NotesState.currentSelectionText.length === 0) return;
        
        const modal = document.getElementById('noteModal');
        if (modal) {
            modal.classList.remove('hidden');
            const textarea = document.getElementById('selectionNoteText');
            if (textarea) {
                textarea.value = '';
                textarea.focus();
            }
        }
        
        SelectionMenu.remove();
    },
    
    /**
     * Close the note modal
     */
    close() {
        const modal = document.getElementById('noteModal');
        if (modal) {
            modal.classList.add('hidden');
        }
        NotesState.currentSelectionRange = null;
        NotesState.currentSelectionText = '';
    },
    
    /**
     * Save the selection note
     */
    save() {
        const textarea = document.getElementById('selectionNoteText');
        const noteText = textarea?.value.trim();
        
        if (!noteText) {
            alert('Please enter a note.');
            return;
        }
        
        const note = {
            id: NotesState.generateId(),
            text: noteText,
            selectionText: NotesState.currentSelectionText,
            timestamp: Utils.formatTimestamp(),
            type: 'selection'
        };
        
        NotesState.data.general.push(note);
        Storage.save();
        GeneralNotesController.render();
        this.close();
        
        // Clear selection
        window.getSelection().removeAllRanges();
    }
};

// =============================================================================
// TEXT SELECTION HANDLER
// =============================================================================

const TextSelectionHandler = {
    /**
     * Initialize text selection handling
     */
    init() {
        const lessonContent = document.querySelector('.lesson-text') || 
                             document.querySelector('.lesson-content');
        if (!lessonContent) return;
        
        lessonContent.addEventListener('mouseup', this.handleSelection.bind(this));
    },
    
    /**
     * Handle text selection
     */
    handleSelection() {
        // Small delay to ensure selection is complete
        setTimeout(() => {
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();
            
            if (selectedText.length > 0 && selectedText.length < 500) {
                SelectionMenu.show(selection, selectedText);
            }
        }, 10);
    }
};

// =============================================================================
// KEYBOARD SHORTCUTS
// =============================================================================

const KeyboardHandler = {
    /**
     * Initialize keyboard shortcuts
     */
    init() {
        document.addEventListener('keydown', this.handleKeydown.bind(this));
    },
    
    /**
     * Handle keydown events
     * @param {KeyboardEvent} e - Keyboard event
     */
    handleKeydown(e) {
        // Ctrl/Cmd + Shift + N: Toggle notes panel
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'n') {
            e.preventDefault();
            PanelController.toggle();
            return;
        }
        
        // Escape: Close modals/panels
        if (e.key === 'Escape') {
            const modal = document.getElementById('noteModal');
            const panel = document.getElementById('notesPanel');
            
            if (modal && !modal.classList.contains('hidden')) {
                NoteModal.close();
            } else if (panel?.classList.contains('open')) {
                PanelController.close();
            }
            
            SelectionMenu.remove();
        }
    }
};

// =============================================================================
// GLOBAL FUNCTIONS (for onclick handlers in HTML)
// =============================================================================

function toggleNotesPanel() {
    PanelController.toggle();
}

function switchNotesTab(tabName) {
    TabController.switch(tabName);
}

function addGeneralNote() {
    GeneralNotesController.add();
}

function editGeneralNote(noteId) {
    GeneralNotesController.edit(noteId);
}

function deleteGeneralNote(noteId) {
    GeneralNotesController.delete(noteId);
}

function selectHighlightColor(color) {
    HighlightController.selectColor(color);
}

function highlightSelection(color) {
    HighlightController.highlightSelection(color);
}

function openNoteModalForSelection() {
    NoteModal.openForSelection();
}

function closeNoteModal() {
    NoteModal.close();
}

function saveSelectionNote() {
    NoteModal.save();
}

// =============================================================================
// INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Load saved data
    Storage.load();
    
    // Initialize handlers
    TextSelectionHandler.init();
    KeyboardHandler.init();
    
    // Render existing notes
    GeneralNotesController.render();
    HighlightController.render();
    
    // Set default highlight color
    HighlightController.selectColor(NotesConfig.DEFAULT_COLOR);
});

// =============================================================================
// ADD STYLES FOR SELECTION MENU BUTTONS
// =============================================================================

const style = document.createElement('style');
style.textContent = `
    .selection-menu-btn {
        padding: 8px 14px;
        background: linear-gradient(135deg, #d4af37, #e4c050);
        color: #0d2a1c;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-family: 'Amiri', serif;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.2s ease;
    }
    
    .selection-menu-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
    }
    
    .empty-state {
        text-align: center;
        color: #888;
        font-style: italic;
        padding: 20px;
    }
    
    .highlight-color-indicator {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-block;
        border: 2px solid rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style);
