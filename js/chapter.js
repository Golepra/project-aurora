const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");
const hero = document.querySelector(".hero");

chapter.addEventListener("click", () => {

    chapter.classList.add("moveAway");

    setTimeout(() => {

        chapter.style.display = "none";

        // Remove hero from layout
        hero.style.display = "none";

        // Reveal confession
        story.classList.add("show");

        // Scroll to it
        story.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 1200);

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 0.15
});

reveals.forEach(el => observer.observe(el));
