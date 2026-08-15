const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

// Click anywhere on Chapter One
chapter.addEventListener("click", () => {

    // Play the exit animation
    chapter.classList.add("moveAway");

    setTimeout(() => {

        // Hide the chapter
        chapter.style.display = "none";

        // Reveal the confession page
        story.classList.add("show");

        // Start at the top
        window.scrollTo({
            top: story.offsetTop,
            behavior: "smooth"
        });

    }, 1000);

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

}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));
