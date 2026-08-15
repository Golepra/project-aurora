console.log("intro.js loaded");

const titleElement = document.getElementById("title");

const text = "PROJECT REUNION";

let currentIndex = 0;

function typeTitle() {
    if (currentIndex < text.length) {
        titleElement.innerHTML += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeTitle, 120);
    }
}

typeTitle();
