export class GameBoard {
  constructor(tag, width, height, player, projectile) {
    this.canvas = document.getElementById(tag);
    this.ctx = this.canvas.getContext("2d");
    this.player = player;
    this.projectile = projectile;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(
      this.player.x,
      this.player.y,
      this.player.radius,
      0,
      Math.PI * 2,
      false
    );
    this.ctx.fillStyle = this.player.color;
    this.ctx.fill();
  }

  drawProjectile(projectile) {
    // console.log(this.projectile);

    this.ctx.beginPath();
    this.ctx.arc(
      projectile.x,
      projectile.y,
      projectile.radius,
      0,
      Math.PI * 2,
      false
    );
    this.ctx.fillStyle = projectile.color;
    this.ctx.fill();
  }
}
