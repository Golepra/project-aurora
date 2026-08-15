const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

chapter.addEventListener("click", () => {

    // Animate chapter away
    chapter.classList.add("moveAway");

    // Reveal the story after the animation
    setTimeout(() => {

        chapter.style.display = "none";

        story.classList.add("show");

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

}, {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
});

reveals.forEach(p => observer.observe(p));
