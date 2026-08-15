const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

chapter.addEventListener("click",()=>{

    chapter.classList.add("moveAway");

    setTimeout(()=>{

        chapter.style.display="none";

        story.classList.add("show");

        story.scrollIntoView({

            behavior:"smooth"

        });

    },1200);

});
