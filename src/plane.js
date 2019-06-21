class Plane {
  constructor() {
    this.x = WIDTH / 4;
    this.y = 0;
  }

  setup() {
    this.img = loadImage("assets/plane.png");
  }

  draw() {
    image(this.img, this.x, this.y, this.img.width / 8, this.img.height / 8);
    this.rect = {
      left: this.x,
      right: this.x + this.img.width / 8,
      top: this.y,
      bottom: this.y + this.img.height / 8
    };

    // rect(this.x, this.y, this.img.width / 8, this.img.height / 8);

    if (this.y < 0 || this.y > height + 10) {
      game.over();
    }
  }

  moveObject() {
    if (key === " ") {
      game.laser.push(new Laser(this.img.pos));
      if (!song.isPlaying()) {
      }
      song.play();
    } else if (keyCode === 40) {
      this.y += 50;
      // } else if (keyCode === 39) {
      //   this.x += 50;
    } else if (keyCode === 38) {
      this.y -= 50;
      1;
    }
  }
}
