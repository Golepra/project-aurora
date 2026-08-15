const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

// ----------------------------
// Make sure this exists
// ----------------------------
const shootingStars = [];

for(let i = 0; i < 250; i++){

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        r: Math.random() * 3 + 0.5,

        speed: Math.random() * 0.15 + 0.02,

        opacity: Math.random() * 0.8 + 0.2,

        twinkle: Math.random() * 0.03

    });

}

// ----------------------------
// Spawn Shooting Stars
// ----------------------------
function spawnShootingStar(){

    const side = Math.floor(Math.random() * 4);

    let x, y, speedX, speedY;

    switch(side){

        // Top → Bottom Right
        case 0:
            x = Math.random() * canvas.width;
            y = -100;
            speedX = 8 + Math.random() * 5;
            speedY = 5 + Math.random() * 3;
            break;

        // Left → Right
        case 1:
            x = -120;
            y = Math.random() * canvas.height * 0.6;
            speedX = 10 + Math.random() * 4;
            speedY = 1 + Math.random() * 2;
            break;

        // Right → Left
        case 2:
            x = canvas.width + 120;
            y = Math.random() * canvas.height * 0.6;
            speedX = -(10 + Math.random() * 4);
            speedY = 1 + Math.random() * 2;
            break;

        // Top Right → Bottom Left
        default:
            x = canvas.width + 120;
            y = -80;
            speedX = -(8 + Math.random() * 5);
            speedY = 5 + Math.random() * 3;

    }

    shootingStars.push({
        x,
        y,
        speedX,
        speedY
    });

}

// Spawn one every 5–8 seconds
function scheduleShootingStar(){

    spawnShootingStar();

    const nextTime = 2500 + Math.random() * 5000; // 2.5–7.5 sec

    setTimeout(scheduleShootingStar, nextTime);

}

setTimeout(() => {

    scheduleShootingStar();

}, 3000 + Math.random() * 6000);

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // ----------------------------
    // Draw normal stars
    // ----------------------------
    stars.forEach(star=>{

        star.opacity += star.twinkle;

        if(star.opacity >= 1 || star.opacity <= 0.2){

            star.twinkle *= -1;

        }

        ctx.beginPath();

        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;

        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fill();

    });

    // ----------------------------
    // Draw shooting stars
    // ----------------------------
    shootingStars.forEach((star,index)=>{

        ctx.beginPath();

        ctx.strokeStyle="rgba(255,255,255,.6)";
        ctx.lineWidth=2;
const length = 120;

const angle = Math.atan2(star.speedY, star.speedX);

const tailX = star.x - Math.cos(angle) * length;
const tailY = star.y - Math.sin(angle) * length;

ctx.beginPath();
ctx.strokeStyle = "rgba(255,255,255,.6)";
ctx.lineWidth = 2;

ctx.moveTo(tailX, tailY);
ctx.lineTo(star.x, star.y);

ctx.stroke();

        ctx.stroke();

        ctx.beginPath();

        ctx.fillStyle="white";
        ctx.arc(star.x,star.y,3,0,Math.PI*2);

        ctx.fill();

        star.x += star.speedX;
        star.y += star.speedY;

        if(star.x > canvas.width + 150 || star.y > canvas.height + 150){

            shootingStars.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});