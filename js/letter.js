const typedText = document.getElementById("typedText");
const continueBtn = document.getElementById("continueBtn");
const letterDate = document.getElementById("letterDate");

if (letterDate) {

    const today = new Date();

    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.getFullYear();

    function getOrdinal(day){

        if(day > 3 && day < 21) return "th";

        switch(day % 10){
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }

    }

    letterDate.textContent = `${day}${getOrdinal(day)} ${month} ${year}`;
}

const message = `I think every story deserves one more sunrise.

If you're reading this,

then somehow, after everything...

you still chose to continue.

Life has a strange way of taking things away,
only to return them in a very unexpected way.

Maybe this isn't the beginning.

Maybe it isn't the end either.

Maybe...

this is simply another page.

Welcome to Project Reunion.`;

let index = 0;
let typingStarted = false;

function startTyping(){

    if(typingStarted) return;

    typingStarted = true;
    index = 0;

    typedText.textContent = "";

    const paper = document.querySelector(".paper");

    let finished = false;

    function finishTyping(){

        if(finished) return;

        finished = true;

        index = message.length;
        typedText.textContent = message;

        if(paper){
            paper.scrollTop = paper.scrollHeight;
        }

        continueBtn.style.display = "flex";

        requestAnimationFrame(() => {
            continueBtn.style.opacity = "1";
            continueBtn.style.pointerEvents = "auto";
            continueBtn.style.transform = "translateY(0)";
        });

    }

    function type(){

        if(finished) return;

        if(index < message.length){

            typedText.textContent += message.charAt(index);
            index++;

            if(paper){
                paper.scrollTop = paper.scrollHeight;
            }

            setTimeout(type,55);

        }else{

            finishTyping();

        }

    }

    if(paper){
        paper.addEventListener("click", finishTyping, { once:true });
    }

    type();
}


/* ===========================================
   CONTINUE BUTTON  (FIXED)
=========================================== */

continueBtn.addEventListener("click", () => {

    const scene = document.getElementById("letterScene");
    const letter = document.querySelector(".letter");
    const glow = document.querySelector(".ambientGlow");
    const chapter = document.getElementById("chapterOne");

    continueBtn.style.pointerEvents = "none";

    glow.classList.add("expand");
    letter.classList.add("dissolve");

    setTimeout(() => {

        // Remove letter completely
       scene.remove();

const overlay = document.getElementById("transitionOverlay");
overlay.style.display = "none";      // <-- Add this line

chapter.style.display = "flex";
chapter.classList.add("show");

    }, 1000);

});


/* ===========================================
   PAPER PARALLAX
=========================================== */

const paper = document.querySelector(".paper");

paper.addEventListener("mousemove",(e)=>{

    const rect = paper.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width)-0.5)*6;
    const rotateX = -((y / rect.height)-0.5)*6;

    paper.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.01)
    `;

});

paper.addEventListener("mouseleave",()=>{

    paper.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
    `;

});
