export const drawBall = (ctx, { x, y, color }) => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
};

export const clearCanvas = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export const render = (state) => {
  const canvas = document.getElementById("gamespace");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(ctx, state);

  requestAnimationFrame(() => render(updateBallState(state)));
};

