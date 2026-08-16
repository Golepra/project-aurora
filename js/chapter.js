const chapter = document.getElementById("chapterOne");
const story = document.getElementById("storyScene");

const confession = [
    "I never thought we'd find our way back to each other.",

    "There was a time when our conversations became memories, and I convinced myself that maybe some people are only meant to be chapters, not the whole story. I didn't hate you for leaving, and I never wanted to turn your reasons into something they weren't. I simply respected the distance, even when I didn't fully understand it.",

    "Then life did something beautiful—and it brought us back.",

    "We've been talking again, laughing again, learning each other again. And somewhere between the ordinary conversations, I realized there was one thing I never truly confessed: how much this reunion means to me.",

    "You once asked me to wait.",

    "I've been holding onto those words not as a promise I wanted to force, but as something I chose to believe in. Waiting isn't the hard part; waiting without knowing what I'm waiting for is.",

    "So this isn't me asking you to rush, and it isn't me asking for an answer today.",

    "I'm only asking for honesty.",

    "If your “wait” means we're slowly walking toward something real, I'll wait with a full heart. But if you're still uncertain about us, about your feelings, or about where this reunion is going, it's okay to tell me that too. I'd rather understand your truth than fill the silence with my own assumptions.",

    "Because what I want has never been something temporary. I want something genuine. Something that chooses both of us. Something we don't have to question every night.",

    "Maybe this reunion happened for a reason. Maybe it's simply two people finding each other again after life pulled them apart. I don't know what the future looks like, but I know I'd rather discover it with honesty than uncertainty.",

    "So here's my confession:",

    "I'm happy you're back. I still see something worth believing in. And if there's really a “we” waiting at the end of this road… I'll keep walking.",

    "Just don't let me walk it alone.\n\n— Pratik"
];

chapter.addEventListener("click", () => {

    chapter.classList.add("moveAway");

    setTimeout(() => {

        chapter.style.display = "none";
        story.classList.add("show");

        startConfession();

    }, 1200);

}, { once: true });

function startConfession(){

    let paragraph = 0;

    function typeParagraph(){

        if(paragraph >= confession.length) return;

        const target = document.getElementById(`line${paragraph + 1}`);
        const text = confession[paragraph];

        let i = 0;

        function type(){

            if(i < text.length){

                target.textContent += text.charAt(i);
                i++;

                // Follow the typing automatically
                target.scrollIntoView({
                    behavior:"smooth",
                    block:"center"
                });

                setTimeout(type,22);

            }else{

                paragraph++;

                setTimeout(typeParagraph,450);

            }

        }

        type();

    }

    typeParagraph();

}
