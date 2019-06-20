class Rain {
  constructor() {
    this.x = WIDTH / 4;
    this.y = 0;
  }

  draw() {
    // want it to randomly appear, tint screen, slow down ship
    const rand = random(0, WIDTH);
    image(
      game.rainimg,
      this.x,
      this.y,
      game.rainimg.width / 8,
      game.rainimg.height / 8
    );
  }
}
