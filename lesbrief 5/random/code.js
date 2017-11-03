var bal;
var ballen = [];
var aantalBallen = 20;
var xball;
var yball;
var ballSize;
var ballcolor;
var ballspeedx;
var ballspeedy;
var clock = 0;

function setup() {
    createCanvas(innerWidth - 20, innerHeight - 20);

    for (var i = 0; i < aantalBallen; i++) {

        var ballSize = random(20, 100);
        var ballspeedx = random(-4, 4);
        var ballspeedy = random(-4, 4);

        bal = new Bal(random(20, innerWidth - 20), random(20, innerHeight - 20), ballSize, ballspeedy + 0.3 * i, ballspeedx + 0.3 * i, random(1, 255), random(1, 255), random(1, 255));
        ballen.push(bal);
    }
}

function draw() {
    background(0, 0, 0, 30);
    fill(0, 220, 10);
    textSize(20);
    text(clock, 50, 50);
    for (var i = 0; i < ballen.length; i++) {
        bal = ballen[i];
        bal.mousedet();
        bal.teken();
        bal.beweeg();
    }
}

function Bal(x, y, radius, xspd, yspd, ballcolor1, ballcolor2, ballcolor3) {
    this.xPos = x;
    this.yPos = y;
    this.radius = radius;
    this.xSpeed = xspd;
    this.ySpeed = yspd;
    this.ballcolor1 = ballcolor1;
    this.ballcolor2 = ballcolor2;
    this.ballcolor3 = ballcolor3;

    this.mousedet = function() {
      dx = mouseX - this.xPos;
      dy = mouseY - this.yPos;
      if (sqrt(dx*dx + dy*dy) <= 50 + this.radius){
        return;
      }
      else {
        background(240, 40, 40, 30)
      }
    }

    this.teken = function() {
        noStroke();
        fill(this.ballcolor1, this.ballcolor2, this.ballcolor3, 50);
        ellipse(this.xPos, this.yPos, 2 * this.radius, 2 * this.radius);
    }

    this.beweeg = function() {
        if (this.xPos > width - this.radius || this.xPos < this.radius) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.yPos > height - this.radius || this.yPos < this.radius) {
            this.ySpeed = -this.ySpeed;
        }
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
        this.xSpeed = this.xSpeed + random(-10, 10);
        this.ySpeed = this.ySpeed - random(-10, 10);
        if (this.xSpeed > 10) {
          this.xSpeed = 10;
        }
        else if (this.xSpeed < -10) {
          this.xSpeed = -10
        }
        if (this.ySpeed > 10) {
          this.ySpeed = 10;
        }
        else if (this.ySpeed < -10) {
          this.ySpeed = -10
        }
    }
}
