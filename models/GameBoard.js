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
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.player.radius,
      0,
      Math.PI * 2,
      false
    );
    this.ctx.fillStyle = this.player.color;
    this.ctx.fill();
  }

  drawProjectile() {
    // console.log(this.projectile);
    // this.projectile.x = this.canvas.width / 2;
    // this.projectile.y = this.canvas.height / 2;

    this.ctx.beginPath();
    this.ctx.arc(
      this.projectile.x,
      this.projectile.y,
      this.projectile.radius,
      0,
      Math.PI * 2,
      false
    );
    this.ctx.fillStyle = this.projectile.color;
    this.ctx.fill();
  }

  updateProjectile() {
    this.projectile.x = this.projectile.x + this.projectile.velocity.x;
    this.projectile.y = this.projectile.y + this.projectile.velocity.y;
  }
}
