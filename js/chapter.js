const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

chapter.addEventListener("click", () => {

    chapter.classList.add("moveAway");

    setTimeout(() => {

        chapter.style.display = "none";
        story.classList.add("show");

        // Jump to the confession page
        story.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 1200);

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(el => observer.observe(el));
