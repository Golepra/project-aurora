const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");
chapter.addEventListener("click", () => {

    chapter.style.pointerEvents = "none";
    chapter.classList.add("moveAway");

    setTimeout(() => {

        chapter.style.display = "none";

        story.classList.add("show");

        // Always start from the top of the confession
        story.scrollTop = 0;

    }, 1200);

}, { once: true });


// Reveal paragraphs while scrolling
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.18
});

reveals.forEach(el => observer.observe(el));
