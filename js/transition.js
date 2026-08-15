const startBtn = document.getElementById("startBtn");

const hero = document.querySelector(".hero");
const overlay = document.getElementById("transitionOverlay");
const letterScene = document.getElementById("letterScene");

startBtn.addEventListener("click",()=>{

    hero.classList.add("exit");

    overlay.classList.add("active");

    setTimeout(()=>{

        letterScene.classList.add("show");

        // Fade the black overlay back out
        overlay.style.opacity = "0";

        if(typeof startTyping==="function"){
            startTyping();
        }

    },900);

});