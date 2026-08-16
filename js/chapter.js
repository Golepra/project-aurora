const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

// ==========================================
// Chapter One → Confession
// ==========================================

chapter.addEventListener("click", () => {

    chapter.style.pointerEvents = "none";
    chapter.classList.add("moveAway");

    setTimeout(() => {

        chapter.style.display = "none";

        story.classList.add("show");

        story.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 1200);

}, { once: true });


// ==========================================
// Paragraph Reveal
// ==========================================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.18,
    rootMargin: "0px 0px -60px 0px"
});

reveals.forEach(el => observer.observe(el));
