class Laser {
  constructor() {
    this.x = game.plane.x + 64;
    this.y = game.plane.y + 32;
  }
  draw() {
    stroke(255);
    strokeWeight(4);
    point(this.x, this.y);
    this.x += 5;
  }
}
