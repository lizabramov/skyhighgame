class Background {
  constructor() {
    this.x = 0;
    this.x1 = WIDTH;
  }
  setup() {
    this.bgImg = loadImage("assets/cloud.jpg");
  }
  draw() {
    image(this.bgImg, this.x, 0, width, height);
    image(this.bgImg, this.x1, 0, width, height);

    this.x -= 3;
    this.x1 -= 3;

    if (this.x < -width) {
      this.x = width;
    }
    if (this.x1 < -width) {
      this.x1 = width;
    }
    // tint(0, 153, 204);

    // tint(0, (153 + frameCount) % 255, (204 + frameCount) % 255);
  }
}
