const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

const reveals = document.querySelectorAll(".reveal");

// ---------- First Sunrise → Confession ----------
chapter.addEventListener("click", () => {

    // Prevent double clicking
    chapter.style.pointerEvents = "none";

    chapter.classList.add("moveAway");

    setTimeout(() => {

        chapter.remove();                  // Remove fixed layer completely

        story.classList.add("show");       // Show confession

        story.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 1200);

}, { once: true });


// ---------- Paragraph Reveal ----------
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            observer.unobserve(entry.target);

        }

    });

}, { threshold: 0.18 });

reveals.forEach(p => observer.observe(p));
