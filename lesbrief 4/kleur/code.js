var bal1;

function setup(){
  createCanvas(innerWidth - 20, innerHeight - 20);
  bal1 = new Bal();
  bal1.xPos = Math.floor(Math.random()* innerWidth - 20);
  bal1.yPos = Math.floor(Math.random()* innerHeight - 20);
  bal1.radius = 10;
  bal1.xSpeed = 5;
  bal1.ySpeed = 3;
  bal1.color = [Math.floor(Math.random()* 255), Math.floor(Math.random()* 255), Math.floor(Math.random()* 255)];// stel hier de kleur
}

function draw(){
  console.log(frameRate())
  background(255);
  bal1.teken();
  bal1.beweeg();
}

function Bal(){
  this.xPos;
  this.yPos;
  this.radius;
  this.xSpeed;
  this.ySpeed;
  this.color;

  this.teken = function(){
    noStroke();
    fill(this.color)
    ellipse(this.xPos, this.yPos, 2*this.radius, 2*this.radius);
  }

  this.beweeg = function(){
    if (this.xPos > width - this.radius || this.xPos < this.radius){
      this.xSpeed = -this.xSpeed;
    }
    if (this.yPos > height - this.radius || this.yPos < this.radius){
      this.ySpeed = -this.ySpeed;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }
}
