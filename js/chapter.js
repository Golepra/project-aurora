const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

chapter.addEventListener("click", () => {

    chapter.style.pointerEvents = "none";
    chapter.classList.add("moveAway");

    setTimeout(() => {

        // Remove First Sunrise
        chapter.style.display = "none";

        // Force confession to exist in layout
        story.style.display = "flex";

        requestAnimationFrame(() => {

            story.classList.add("show");

            window.scrollTo({
                top: story.offsetTop,
                behavior: "auto"
            });

        });

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
