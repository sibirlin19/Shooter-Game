import { GameBoard } from "./models/GameBoard.js";
import { Player } from "./models/Player.js";
import { Projectile } from "./models/Projectile.js";

const player = new Player(20, 20, 30, "blue", null);
const projectile = new Projectile(696, 657.5, 10, "red", { x: 1, y: 1 });

console.log(projectile);

const gameBoard = new GameBoard(
  "canvas",
  window.innerWidth,
  window.innerHeight,
  player,
  projectile
);

gameBoard.drawBall();

// const proj = new Projectile(event.clientX, event.clientY, 20, "red");
// console.log(proj);

window.addEventListener("click", (event) => {});

function animate() {
  requestAnimationFrame(animate);
  console.log("go");
  gameBoard.drawProjectile();
  gameBoard.updateProjectile();
}
// animate();
