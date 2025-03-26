const canvas = document.getElementById("gamespace");
const ctx = canvas.getContext("2d");

const ballRadius = 10;

canvas.width = 500;
canvas.height = 400;

// Initialize state as an object instead of separate variables
const initialState = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  dx: 2,
  dy: -2,
  color: "#0095DD"
};

// Function to generate a random colors
const getRandomColor = () =>
  "#" + Array.from({ length: 6 }, () => "0123456789ABCDEF"[Math.floor(Math.random() * 16)]).join("");

// Function to draw ball (does not mutate state)
const drawBall = (ctx, { x, y, color }) => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

// Function to update ball state (returns new state)
const updateBallState = (state) => {
  let { x, y, dx, dy, color } = state;

  const hitWallX = x + dx > canvas.width - ballRadius || x + dx < ballRadius;
  const hitWallY = y + dy > canvas.height - ballRadius || y + dy < ballRadius;

  return {
    x: x + dx,
    y: y + dy,
    dx: hitWallX ? -dx : dx,
    dy: hitWallY ? -dy : dy,
    color: hitWallX || hitWallY ? getRandomColor() : color,
  };
};

// Main render function 
const render = (state) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(ctx, state);

  // Request next frame with new state
  requestAnimationFrame(() => render(updateBallState(state)));
}

// Start game with button click
document.getElementById("runButton").addEventListener("click", function () {
  render(initialState);
  this.disabled = true;
});



