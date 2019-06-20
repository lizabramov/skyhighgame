class GameOver {
  constructor() {
    this.endGame = false;
  }

  setup() {
    this.endImg = loadImage("assets/gameover.png");
  }

  draw() {
    image(this.endImg, 0, 0, width, height);
  }
}
