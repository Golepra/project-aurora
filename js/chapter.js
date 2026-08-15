const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

// Chapter → Confession
chapter.addEventListener("click", () => {

    chapter.classList.add("moveAway");

    setTimeout(() => {

        chapter.style.display = "none";
        story.classList.add("show");

    }, 1200);

});

// Paragraph reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
});

reveals.forEach(el => observer.observe(el));
