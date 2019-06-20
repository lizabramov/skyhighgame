const game = new Game();
const startpage = new StartPage();
const gameover = new GameOver();
// let start = true;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  startpage.setup();
  game.setup();
  gameover.setup();
}

function draw() {
  // clear();
  if (!startpage.startGame) {
    startpage.draw();
  }
  if (startpage.startGame) {
    game.draw();
    startpage.button.remove();
  }
  if (game.gameover) {
    gameover.draw();
  }
}

function keyPressed() {
  game.plane.moveObject();
}

window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
