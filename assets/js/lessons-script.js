// Lesson data
const lessons = {
    1: {
        title: "The First Lesson:",
        content: `
            <p class="lesson-text">
                Memorizing the opening Soorah (Chapter) of the Qur'an: Al-Fatiha and some short passages and Soorahs from No. 99(Az-Zalzalah)to 114(An-Naas). Every Muslim must make an effort to memorize, recite and understand passages and/or Soorahs from the Noble Qur'an.
            </p>
        `
    },
    2: {
        title: "The Second Lesson:",
        content: `
            <p class="lesson-text">
                Knowing the meaning and the conditions of the declaration of Ash-Shahadatan that: there is no true God except Allah and that Muhammad <span class="arabic-inline">(صَلَّى ٱللَّٰهُ عَلَيْهِ وَسَلَّمَ)</span> is the Messenger of Allah. The phrase that "there is no true God" negates anything or anyone that is being worshipped other than Allah, and the phrase: "except Allah" confirms that all forms of worship, submission and adoration must be for Allah alone without setting up rivals with Him. The conditions needed to fulfill the meaning of Ash-Shahadatan are:
            </p>
            
            <ul class="lesson-list">
                <li>Knowledge about what it means.</li>
                <li>Certainty about its meaning which dispels doubts and suspicions.</li>
                <li>Sincerity that purifies its declarer from any form of <span class="tooltip-term" data-tooltip="Is to associate someone or something in the worship of Allah.">Shirk</span>.</li>
                <li>Honesty which negates hypocrisy.</li>
                <li>Love and attachment to the declaration of Ash-Shahadatan, which leads to the dispel of uneasiness, dislike, or hate to what it implies.</li>
                <li>Adherance: conducting what Allah has decreed regarding His worship.</li>
                <li>Accepting to obey Allah by this declaration.</li>
                <li>Dissociating from anything or anyone being worshipped other than Allah.</li>
            </ul>
        `
    }
};

// Show lesson modal
function showLesson(lessonNumber) {
    const modal = document.getElementById('lessonModal');
    const content = document.getElementById('lessonContent');
    const lesson = lessons[lessonNumber];
    
    if (lesson) {
        content.innerHTML = `
            <h2 class="modal-lesson-title">${lesson.title}</h2>
            ${lesson.content}
        `;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close lesson modal
function closeLesson() {
    const modal = document.getElementById('lessonModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('lessonModal');
    if (event.target === modal) {
        closeLesson();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLesson();
    }
});
