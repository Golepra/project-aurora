const startBtn = document.getElementById("startBtn");

const hero = document.querySelector(".hero");
const overlay = document.getElementById("transitionOverlay");
const letterScene = document.getElementById("letterScene");

startBtn.addEventListener("click", () => {

    hero.classList.add("exit");
    overlay.classList.add("active");

    setTimeout(() => {

        // Remove hero
        hero.style.display = "none";

        // Show letter
        letterScene.classList.add("show");

        // REMOVE the black overlay
        overlay.classList.remove("active");

        if (typeof startTyping === "function") {
            startTyping();
        }

    }, 900);

});
