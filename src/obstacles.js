class Obstacle {
  constructor() {
    this.x = WIDTH;

    const rand = random(0, HEIGHT);

    // this.bottom = rand - 50;

    this.top = rand - 50;
    this.rocket = game.rocket;

    this.bottom = this.top + this.rocket.height / 25;
    this.left = this.x;
    this.right = this.x + this.rocket.width / 25;
    this.hit = false;
    this.speed = 7;
  }

  draw() {
    image(
      this.rocket,
      this.x,

      this.top,
      this.rocket.width / 25,
      this.rocket.height / 25
    );

    this.x -= this.speed;

    this.left = this.x;
    this.right = this.x + this.rocket.width / 25;

    this.collisionBlocks();
    // rect(this.left, this.top, this.rocket.width / 25, this.rocket.height / 25);
  }
  collisionBlocks() {
    const collisionRect = {
      left: this.left,
      right: this.right,
      top: this.top,
      bottom: this.bottom
    };
    // top: height - this.bottom,
    // bottom: height
    // const d = dist(
    //   game.laser.x,
    //   game.laser.y,
    //   this.left + this.rocket.width / 50,
    //   this.top + this.rocket.height / 50
    // );
    // if (d < this.right / 2) {
    //   console.log("hit");
    //   // return this.rocket.changeColor('red');
    //   // break this.rocket
    // }
    // noLoop();
    game.laser.forEach((laser, i) => {
      if (
        laser.x > this.left &&
        laser.x < this.right &&
        laser.y > this.top &&
        laser.y < this.bottom
      ) {
        console.log("hit");
        game.laser.splice(i, 1);
        this.hit = true;
      }
    });

    if (
      !(
        game.plane.rect.left > collisionRect.right ||
        game.plane.rect.right < collisionRect.left ||
        game.plane.rect.top > collisionRect.bottom ||
        game.plane.rect.bottom < collisionRect.top
      )
    ) {
      game.over();
    }
  }
}

// ){
//   times++
//   print("hit "+ times);
//   print("----------")
// }

//     if (this.intersectRect(collisionRect, game.plane.rect)) {
//       debugger;
//       game.over();
//     }
//   }

//   intersectRect(rectA, rectB) {
//     return (
//       !rectA.left > rectB.right ||
//       rectA.right < rectB.left ||
//       rectA.top > rectB.bottom ||
//       rectA.bottom < rectB.top
//     );
//   }
// }
// game.laser.forEach(laser=> intersect(laser.rect,))
