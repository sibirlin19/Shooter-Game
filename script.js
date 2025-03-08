import { GameBoard } from "./models/GameBoard.js";
import { Player } from "./models/Player.js";
import { Projectile } from "./models/Projectile.js";

const player = new Player(20, 20, 20, "blue");
const projectile = new Projectile(230, 30, 20, "red");

console.log(projectile);

const gameBoard = new GameBoard(
  "canvas",
  window.innerWidth,
  window.innerHeight,
  player,
  projectile
);

gameBoard.drawBall();

window.addEventListener("click", (event) => {
  const proj = new Projectile(event.clientX, event.clientY, 20, "red");
  console.log(proj);

  gameBoard.drawProjectile(proj);
});
