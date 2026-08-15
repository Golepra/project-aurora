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
