class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canhaoImage = loadImage("assets/cannom.png");
    this.canhaobaseImage = loadImage("assets/cannomBase.png");
    
  }
  display() {
    push();
    //translate(this.x,this.y);
    //rotate(this.angle);
    imageMode(CENTER);
    image(this.CannonImage,0,0,this.width,this.height);
    pop();
    image(this.canhaobaseImage,77,95,25,25);
    noFill();
  }
}
