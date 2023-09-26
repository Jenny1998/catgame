let posX = 50,
  posY = 50;
let speedX = 1,
  speedY = 1;
let directionX = 1,
  directionY = 1;

const gameContainer = document.getElementById("game-container");
const prey = document.getElementById("prey");
const preySound = document.getElementById("sound");
const backgroundSound = new Audio("background.mp3");
backgroundSound.loop = true;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changeSpeed() {
  speedX = getRandomInt(10);
  speedY = getRandomInt(10);
}

function changeDir() {
  let dir = [1, -1];
  directionX = dir[getRandomInt(2)];
  directionY = dir[getRandomInt(2)];
}

function movePrey() {
  posX += speedX * directionX;
  posY += speedY * directionY;

  if (posX >= gameContainer.clientWidth - prey.clientWidth || posX <= 0) {
    directionX *= -1;
  }

  if (posY >= gameContainer.clientHeight - prey.clientHeight || posY <= 0) {
    directionY *= -1;
  }

  prey.style.left = posX + "px";
  prey.style.top = posY + "px";
}

function playSound() {
  preySound.play();
}

prey.addEventListener("click", () => {
  preySound.play();
});

gameContainer.addEventListener("click", () => {
  backgroundSound
    .play()
    .then(() => {
      console.log("Audio playing");
    })
    .catch((error) => {
      console.log("Playback failed: ", error);
    });
});

setInterval(movePrey, 10);
setInterval(changeSpeed, 2000); // Change speed every 2000ms or 2 seconds
