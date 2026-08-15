const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");
const hero = document.querySelector(".hero");

chapter.addEventListener("click", () => {

    // Play First Sunrise exit animation
    chapter.classList.add("moveAway");

    setTimeout(() => {

        // Remove the chapter completely
        chapter.style.display = "none";

        // Remove the invisible hero from layout
        if(hero){
            hero.style.display = "none";
        }

        // Reveal the confession page
        story.classList.add("show");

        // Scroll exactly to confession
        story.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 1200);

});


// Paragraph reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
            observer.unobserve(entry.target);

        }

    });

},{
    threshold: 0.2
});

reveals.forEach(el => observer.observe(el));
