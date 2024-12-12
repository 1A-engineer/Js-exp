const mario = document.getElementById("mario");

let isJumping = false;
let pressStartTime = 0;
let jumpInterval;

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !isJumping) {
        isJumping = true;
        pressStartTime = Date.now();
        startJump();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space" && isJumping) {
        stopJump();
        isJumping = false;
    }
});

function startJump() {
    let currentHeight = 20; // Start at the ground level
    mario.style.transition = "none";

    jumpInterval = setInterval(() => {
        const pressDuration = Date.now() - pressStartTime;
        const jumpHeight = Math.min(100, 50 + pressDuration / 5); // Cap height at 200px

        if (jumpHeight > currentHeight) {
            currentHeight = jumpHeight;
            mario.style.bottom = `${currentHeight}px`;
        }
    }, 10);
}

function stopJump() {
    clearInterval(jumpInterval);
    mario.style.transition = "bottom 0.3s ease";
    mario.style.bottom = "20px"; // Return to the ground
}
