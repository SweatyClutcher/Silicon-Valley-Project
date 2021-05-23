class SpaceShip {
  constructor(x, y, width, height) {
    var options = { isStatic: true, frictionAir: 0, restitution: 0 };
    this.image = loadImage("images/SpaceShip.png");
    this.bulletImg = loadImage("images/SpaceShipBullet.png");
    this.image1 = loadImage("images/Hatchling.png");
    this.image2 = loadImage("images/PrimoGeovishap.png");
    this.image3 = loadImage("images/Azdaha.png");
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  move() {
    if (GameState === 1) {
      if(keyDown(UP_ARROW)){
        this.body.position.y -= 10;
      }
      if(keyDown(DOWN_ARROW)){
        this.body.position.y += 10;
      }
      if (keyDown(32)) {
        if (frameCount % 15 === 0) {
          var bullet = new Bullet();
          bullets.push(bullet);
        }
      }
      if (frameCount % 50 === 0) {
        var hatchling = new Hatchling();
        hatchlings.push(hatchling);
        enemies.push(hatchling);
      }
      if (frameCount % 200 === 0) {
        var primogeovishap = new PrimoGeovishap();
        hatchlings.push(primogeovishap);
        enemies.push(primogeovishap);
      }
      if (frameCount % 500 === 0) {
        var azdaha = new Azdaha();
        hatchlings.push(azdaha);
        enemies.push(azdaha);
      }
    }
    drawSprites();
  }
}
