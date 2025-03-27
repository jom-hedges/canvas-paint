import { getRandomColor } from "./utils.js";

// Initialize state as an object instead of separate variables
export const initialState = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  dx: 2,
  dy: -2,
  ballRadius: 10,
  color: "#0095DD",
  walls: [
    { x: 100, y: 50, width: 10, height: 300 },
    { x: 200, y: 150, width: 200, height: 10 }
  ]
};

// Function to update ball state (returns new state)
export const updateBallState = (state) => {
  let { x, y, dx, dy, color, ballRadius } = state;

  const hitWallX = x + dx > canvas.width - ballRadius || x + dx < ballRadius;
  const hitWallY = y + dy > canvas.height - ballRadius || y + dy < ballRadius;

  return {
    x: x + dx,
    y: y + dy,
    dx: hitWallX ? -dx : dx,
    dy: hitWallY ? -dy : dy,
    color: hitWallX || hitWallY ? getRandomColor() : color,
    ballRadius
  };
};

