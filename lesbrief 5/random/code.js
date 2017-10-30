var bal;
var ballen = [];
var aantalBallen = 3;
var xball = 20;
var yball = 20;
var ballSize = 10;
var ballcolor = [230, 40, 40];
var ballspeedx = 5;
var ballspeedy = 3;

function setup(){
  createCanvas(innerWidth - 20, innerHeight - 20);

  for (var i = 0; i< aantalBallen; i++){
    bal = new Bal(xball + i, yball, ballSize, ballspeedy + 0.3*i, ballspeedx + 0.3*i);
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
    noStroke();
    fill(ballcolor);
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
