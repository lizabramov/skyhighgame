class Game {
  constructor() {
    this.bg = new Background();
    this.plane = new Plane();
    this.laser = [];
    this.obstacle = [];
    this.rain = [];
    this.gameover = false;
  }

  setup() {
    this.rocket = loadImage("assets/bullet.png");
    this.rainimg = loadImage("assets/storm.png");
    this.bg.setup();
    this.plane.setup();
  }

  draw() {
    frameRate(60);
    // clear();
    this.bg.draw();
    if (frameCount % 400 == 0) {
      this.rain.push(new Rain());

      setTimeout(() => {
        this.rain.pop();
      }, 2000);
    }

    if (this.rain.length >= 1) {
      frameRate(20);
    }

    this.rain.forEach(rain => rain.draw());
    this.plane.draw();
    this.laser.forEach(laser => {
      laser.draw();
    });

    if (frameCount % 25 === 0) {
      this.obstacle.push(new Obstacle());
    }

    this.obstacle.forEach((obstacle, i) => {
      obstacle.draw();
      if (obstacle.x + 48 < 0 || obstacle.hit) {
        this.obstacle.splice(i, 1);
      }
      if (frameCount % 200 == 0) {
        obstacle.speed += 1;
      }
    });
    // filter the obstacles with neg x
  }
  over() {
    noLoop();
    setTimeout(() => {
      this.gameover = true;
      loop();
    }, 1000);
    // this.gameover = true;
  }
}
