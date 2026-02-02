/* ============================================================================
   LESSONS INDEX PAGE SCRIPTS
   Important Lessons for the Muslim Ummah
   ============================================================================ */

/**
 * Configuration
 */
const LessonsConfig = {
    ANIMATION_DELAY_INCREMENT: 0.08,
    PROGRESS_STORAGE_KEY: 'lessonProgress',
    MAX_LESSONS: 18
};

/**
 * Storage utilities
 */
const LessonsStorage = {
    get(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error writing to localStorage:', error);
            return false;
        }
    }
};

/**
 * Reading progress tracking
 */
const ProgressTracker = {
    progress: null,

    init() {
        this.progress = LessonsStorage.get(LessonsConfig.PROGRESS_STORAGE_KEY) || {
            completedLessons: [],
            lastVisited: null,
            visitHistory: []
        };
        this.updateUI();
    },

    markLessonVisited(lessonNumber) {
        if (!this.progress.visitHistory.includes(lessonNumber)) {
            this.progress.visitHistory.push(lessonNumber);
        }
        this.progress.lastVisited = lessonNumber;
        this.save();
    },

    markLessonCompleted(lessonNumber) {
        if (!this.progress.completedLessons.includes(lessonNumber)) {
            this.progress.completedLessons.push(lessonNumber);
            this.save();
            this.updateUI();
        }
    },

    isCompleted(lessonNumber) {
        return this.progress.completedLessons.includes(lessonNumber);
    },

    getProgress() {
        return {
            completed: this.progress.completedLessons.length,
            total: LessonsConfig.MAX_LESSONS,
            percentage: Math.round((this.progress.completedLessons.length / LessonsConfig.MAX_LESSONS) * 100)
        };
    },

    save() {
        LessonsStorage.set(LessonsConfig.PROGRESS_STORAGE_KEY, this.progress);
    },

    updateUI() {
        // Update lesson cards with completion status
        document.querySelectorAll('.lesson-card').forEach(card => {
            const lessonNum = parseInt(card.dataset.lesson);
            if (lessonNum && this.isCompleted(lessonNum)) {
                card.classList.add('completed');
            }
        });

        // Update progress display if exists
        const progressDisplay = document.getElementById('progressDisplay');
        if (progressDisplay) {
            const { completed, total, percentage } = this.getProgress();
            progressDisplay.textContent = `${completed}/${total} lessons completed (${percentage}%)`;
        }
    }
};

/**
 * Lesson card animations and interactions
 */
const LessonCards = {
    init() {
        const cards = document.querySelectorAll('.lesson-card');
        
        cards.forEach((card, index) => {
            // Add staggered animation delay
            card.style.animationDelay = `${index * LessonsConfig.ANIMATION_DELAY_INCREMENT}s`;
            
            // Add data attribute for lesson number if not present
            if (!card.dataset.lesson) {
                card.dataset.lesson = index + 1;
            }

            // Add keyboard support
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });

            // Track visits on click
            card.addEventListener('click', () => {
                const lessonNum = parseInt(card.dataset.lesson);
                if (lessonNum) {
                    ProgressTracker.markLessonVisited(lessonNum);
                }
            });
        });
    }
};

/**
 * Light particles animation
 */
const Particles = {
    container: null,
    particles: [],
    count: 15,

    init() {
        this.container = document.querySelector('.particles-container');
        if (!this.container) return;

        // Create floating particles
        for (let i = 0; i < this.count; i++) {
            this.createParticle();
        }
    },

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'light-particle';
        
        // Random position and animation
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 15;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;

        this.container.appendChild(particle);
        this.particles.push(particle);
    }
};

/**
 * Search/filter functionality
 */
const LessonFilter = {
    input: null,
    cards: null,

    init() {
        this.input = document.getElementById('lessonSearch');
        this.cards = document.querySelectorAll('.lesson-card');
        
        if (!this.input) return;

        this.input.addEventListener('input', () => this.filter());
    },

    filter() {
        const searchTerm = this.input.value.toLowerCase().trim();

        this.cards.forEach(card => {
            const title = card.querySelector('.lesson-card-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.lesson-card-description')?.textContent.toLowerCase() || '';
            const number = card.dataset.lesson || '';

            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) ||
                          number.includes(searchTerm);

            card.style.display = matches ? '' : 'none';
        });
    }
};

/**
 * Navigate to lesson page
 */
function goToLesson(lessonNumber) {
    window.location.href = `lesson-${lessonNumber}.html`;
}

/**
 * Navigate to questions page
 */
function goToQuestions(lessonNumber) {
    window.location.href = `lesson-${lessonNumber}-questions.html`;
}

/**
 * Initialize all features
 */
document.addEventListener('DOMContentLoaded', () => {
    ProgressTracker.init();
    LessonCards.init();
    Particles.init();
    LessonFilter.init();
});

// Expose functions globally
window.goToLesson = goToLesson;
window.goToQuestions = goToQuestions;
window.ProgressTracker = ProgressTracker;
