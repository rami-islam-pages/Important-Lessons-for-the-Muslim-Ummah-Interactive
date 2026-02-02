/**
 * =============================================================================
 * MAIN SCRIPT - Important Lessons for the Muslim Ummah
 * =============================================================================
 * 
 * Global utilities and navigation functions
 */

'use strict';

// =============================================================================
// NAVIGATION
// =============================================================================

/**
 * Navigate to the lessons index page
 */
function enterBook() {
    window.location.href = 'lessons/index.html';
}

/**
 * Navigate to a specific lesson
 * @param {number} lessonNumber - Lesson number to navigate to
 */
function goToLesson(lessonNumber) {
    window.location.href = `lesson-${lessonNumber}.html`;
}

/**
 * Navigate back to lessons index
 */
function backToLessons() {
    window.location.href = 'index.html';
}

/**
 * Navigate back to home
 */
function backToHome() {
    window.location.href = '../index.html';
}

// =============================================================================
// SMOOTH SCROLL
// =============================================================================

/**
 * Smooth scroll to an element
 * @param {string} elementId - ID of element to scroll to
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// =============================================================================
// PAGE TRANSITIONS
// =============================================================================

/**
 * Add fade-out class before navigation
 * @param {string} url - URL to navigate to
 */
function navigateWithTransition(url) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get current lesson number from URL
 * @returns {number|null} Current lesson number or null
 */
function getCurrentLessonNumber() {
    const match = window.location.pathname.match(/lesson-(\d+)/);
    return match ? parseInt(match[1]) : null;
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} Whether element is visible
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =============================================================================
// READING PROGRESS
// =============================================================================

const ReadingProgress = {
    STORAGE_KEY: 'readingProgress',
    
    /**
     * Save current reading position
     */
    save() {
        const lessonNumber = getCurrentLessonNumber();
        if (!lessonNumber) return;
        
        const scrollPosition = window.scrollY;
        const progress = {
            lesson: lessonNumber,
            scroll: scrollPosition,
            timestamp: Date.now()
        };
        
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
        } catch (e) {
            console.error('Failed to save reading progress:', e);
        }
    },
    
    /**
     * Restore reading position
     */
    restore() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (!stored) return null;
            
            const progress = JSON.parse(stored);
            const currentLesson = getCurrentLessonNumber();
            
            if (currentLesson === progress.lesson) {
                window.scrollTo({
                    top: progress.scroll,
                    behavior: 'smooth'
                });
            }
            
            return progress;
        } catch (e) {
            console.error('Failed to restore reading progress:', e);
            return null;
        }
    },
    
    /**
     * Clear reading progress
     */
    clear() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
        } catch (e) {
            console.error('Failed to clear reading progress:', e);
        }
    }
};

// =============================================================================
// THEME PREFERENCE (for future dark mode)
// =============================================================================

const ThemeManager = {
    STORAGE_KEY: 'themePreference',
    
    /**
     * Get current theme
     * @returns {string} Current theme name
     */
    get() {
        return localStorage.getItem(this.STORAGE_KEY) || 'light';
    },
    
    /**
     * Set theme
     * @param {string} theme - Theme name
     */
    set(theme) {
        localStorage.setItem(this.STORAGE_KEY, theme);
        document.documentElement.setAttribute('data-theme', theme);
    },
    
    /**
     * Toggle between light and dark
     */
    toggle() {
        const current = this.get();
        this.set(current === 'light' ? 'dark' : 'light');
    }
};

// =============================================================================
// INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Fade in on page load
    document.body.style.opacity = '1';
    
    // Restore reading progress on lesson pages
    if (getCurrentLessonNumber()) {
        ReadingProgress.restore();
        
        // Save progress on scroll (debounced)
        window.addEventListener('scroll', debounce(() => {
            ReadingProgress.save();
        }, 500));
    }
    
    // Apply saved theme
    ThemeManager.set(ThemeManager.get());
});

// =============================================================================
// KEYBOARD NAVIGATION
// =============================================================================

document.addEventListener('keydown', function(e) {
    const lessonNumber = getCurrentLessonNumber();
    
    // Only on lesson pages
    if (!lessonNumber) return;
    
    // Left arrow: Previous lesson
    if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.metaKey && lessonNumber > 1) {
        // Check if user is not in an input field
        if (document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'TEXTAREA') {
            goToLesson(lessonNumber - 1);
        }
    }
    
    // Right arrow: Next lesson
    if (e.key === 'ArrowRight' && !e.ctrlKey && !e.metaKey && lessonNumber < 18) {
        if (document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'TEXTAREA') {
            goToLesson(lessonNumber + 1);
        }
    }
});

// =============================================================================
// SERVICE WORKER REGISTRATION (for future PWA support)
// =============================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is added
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => {
        //         console.log('SW registered:', registration);
        //     })
        //     .catch(error => {
        //         console.log('SW registration failed:', error);
        //     });
    });
}
