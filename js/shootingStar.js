const shootingStars = [];

function spawnShootingStar() {

    const side = Math.floor(Math.random() * 4);

    let x;
    let y;
    let speedX;
    let speedY;

    switch (side) {

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
        case 3:

            x = canvas.width + 120;
            y = -80;

            speedX = -(8 + Math.random() * 5);
            speedY = 5 + Math.random() * 3;

            break;

    }

    shootingStars.push({

        x: x,
        y: y,

        speedX: speedX,
        speedY: speedY,

        life: 0

    });

}


// ==========================================
// RANDOM METEOR SCHEDULER
// ==========================================

function scheduleShootingStar() {

    const delay = 3000 + Math.random() * 7000;

    setTimeout(() => {

        spawnShootingStar();

        scheduleShootingStar();

    }, delay);

}


// ==========================================
// DELAY FIRST METEOR AFTER PAGE LOAD
// ==========================================

setTimeout(() => {

    scheduleShootingStar();

}, 5000);