class StartPage {
  constructor() {
    this.startGame = false;
  }

  setup() {
    this.startImg = loadImage("assets/startpage.png");
    this.button = createButton("START");
    this.button.parent("game-board");
    this.button.position(WIDTH / 1.59, HEIGHT / 4.29);
    this.button.style("transform:translate(-50%,-50%)");
    this.button.mousePressed(() => {
      this.startGame = true;
    });
  }

  draw() {
    image(this.startImg, 0, 0, width, height);
  }
}
