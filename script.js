const mario = document.getElementById('mario');
        const obstacles = document.querySelectorAll('.obstacle');
        const gameCanvas = document.getElementById('gameCanvas');
        let marioX = 0;
        let marioY = 0;
        let isJumping = false;
        let jumpHeight = 0;
        let gravity = 5;
        let velocityY = 0;
        let keys = {};

        document.addEventListener('keydown', (event) => {
            keys[event.key] = true;
        });

        document.addEventListener('keyup', (event) => {
            keys[event.key] = false;
        });

        function update() {
            // Horizontal movement
            if (keys['ArrowLeft']) {
                marioX = Math.max(0, marioX - 5);
            }
            if (keys['ArrowRight']) {
                marioX = Math.min(gameCanvas.clientWidth - mario.clientWidth, marioX + 5);
            }

            // Jumping
            if (keys[' '] && !isJumping) {
                isJumping = true;
                velocityY = 15; // Initial jump velocity
                jumpHeight = 0;
            }

            if (isJumping) {
                marioY += velocityY;
                velocityY -= gravity * 0.1 ; // Apply gravity
                jumpHeight += velocityY;

                if (jumpHeight <= 0) {
                    marioY = 0;
                    isJumping = false;
                    velocityY = 0;
                }
            }

            // Collision detection
            obstacles.forEach(obstacle => {
              const obstacleLeft = obstacle.offsetLeft;
              const obstacleRight = obstacle.offsetLeft + obstacle.clientWidth;
              const obstacleTop = gameCanvas.clientHeight - obstacle.offsetTop - obstacle.clientHeight;
              const obstacleBottom = gameCanvas.clientHeight - obstacle.offsetTop;
          
              const marioLeft = marioX;
              const marioRight = marioX + mario.clientWidth;
              const marioTop = marioY;
              const marioBottom = marioY + mario.clientHeight;
          
              if (
                  marioRight > obstacleLeft && // Mario's right side crosses the obstacle's left side
                  marioLeft < obstacleRight && // Mario's left side crosses the obstacle's right side
                  marioBottom > obstacleTop && // Mario's bottom crosses the obstacle's top
                  marioTop < obstacleBottom    // Mario's top crosses the obstacle's bottom
              ) {
                  // Collision detected
                  mario.style.backgroundColor = 'orange'; // Change color on collision
              } else {
                  mario.style.backgroundColor = 'red'; // Reset color
              }
          });
          

            // Update Mario's position
            mario.style.left = marioX + 'px';
            mario.style.bottom = marioY + 'px';

            requestAnimationFrame(update);
        }

        update();