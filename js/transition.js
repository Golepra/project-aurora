const startBtn = document.getElementById("startBtn");

const hero = document.querySelector(".hero");
const overlay = document.getElementById("transitionOverlay");
const letterScene = document.getElementById("letterScene");

startBtn.addEventListener("click",()=>{

    hero.classList.add("exit");

    overlay.classList.add("active");

setTimeout(() => {

    // Remove the hero from the page completely
    hero.style.display = "none";

    // Show the letter
    letterScene.classList.add("show");

    if(typeof startTyping === "function"){
        startTyping();
    }

}, 900);

});
