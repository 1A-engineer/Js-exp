const mario = document.getElementById("mario");
const obstacle = document.getElementById("obstacle");
const gameContainer = document.querySelector(".game-container");
const background = document.querySelector(".background");

let marioPosition = 50;
let backgroundPosition = 0;
let marioSpeed = 5; // Speed of Mario's movement to the right

// Move Mario to the right
function moveMarioRight() {
  marioPosition += marioSpeed;
  mario.style.left = `${marioPosition}px`;
} 

this.gravi

Mario jump
document.addEventListener("keydown", (event) =>)
  // Move the background with Mario
  if (marioPosition > gameContainer.offsetWidth / 2) {
    backgroundPosition -= marioSpeed;
    background.style.left = `${backgroundPosition}px`;
  }
}

// Handle key events for Mario movement
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    moveMarioRight();
  }
});

// Move the obstacle (fixed position on the background)
let obstaclePosition = 800; // Set to be part of the background
function moveObstacle() {
  obstaclePosition -= 5; // Obstacle moves with background

  if (obstaclePosition < -50) {
    obstaclePosition = window.innerWidth; // Reset obstacle position
  }
  obstacle.style.left = `${obstaclePosition}px`;
}

setInterval(moveObstacle, 20);
