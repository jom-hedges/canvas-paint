// game logic
import { createWall, drawWall, wallCollidesWithBall } from './wall.js';

function startGame() {

}

let state {
  walls: [],
  wallCount: 0,
  gameOver: false,
  gamePaused: false,
  timer: { active: false },
};

const wall = createWall(100, 150, 20, 100);
const ball = {x: 105, y: 160, radius: 5 };

if (wallCollidesWithBall(ball, wall)) {
  console.log("Game Over!");
}

drawWall(ctx, wall);

