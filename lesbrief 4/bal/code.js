var bal;
var ballen = [];
var aantalBallen = 3;

function setup(){
  createCanvas(innerWidth - 20, innerHeight - 20);

  for (var i = 0; i< aantalBallen; i++){
    bal = new Bal(21 + i, 21, 10, 5 + 0.1*i, 3+0.1*i);
    ballen.push(bal);
  }
}

function draw(){
  background(255, 255, 255, 1);
  for (var i = 0; i < ballen.length; i++){
    bal = ballen[i];
    bal.teken();
    bal.beweeg();
  }
}

function Bal(x, y, radius, xspd, yspd){
  this.xPos = x;
  this.yPos = y;
  this.radius = radius;
  this.xSpeed = xspd;
  this.ySpeed = yspd;

  this.teken = function(){
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
