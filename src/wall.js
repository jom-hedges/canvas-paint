/* a wall is created at the position of the mouse click or paddle
 * With a direction (0=vert, 1=horizontal), it expands until
 * it hits a canvas boundary or a ball. Hitting a ball loses a life.
 */
 
export function createWall({ walls, wallCount, gameOver, gamePaused, timer }) {
  const canCreateWall = 
    !=gameOver &&
    !gamePaused &&
    wallPaused === 0 &&
    !timer.active;

  return canCreateWall
    ? { walls: [...walls, new Wall()], wallCount: wallCount + 1 }
    : { walls, wallCount };
}

export const createWall = (x, y, width, height) => ({
  x,
  y,
  width,
  height,
  type: 'wall'
});

export const drawWall = (ctx, wall) => {
  ctx.fillStyle ='black';
  ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
}

export const wallCollidesWithBall = (ball, wall) => {
  return (
    ball.x + ball.radius > wall.x &&
    ball.x - ball.radius < wall.x + wall.width &&
    ball.y + ball.radius > wall.y &&
    ball.y - ball.radius < wall.y + wall.height
  );
};
