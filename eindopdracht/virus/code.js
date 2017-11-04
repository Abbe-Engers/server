var bal;
var ballen = [];
var aantalBallen = 1;
var xball;
var yball;
var ballSize;
var ballcolor;
var ballspeedx;
var ballspeedy;
var xplayer;
var yplayer;
var playerSize;
var playerspeed;
var xA = innerWidth / 10;
var xB = xA * 9.5;
var yA = innerHeight / 10;
var yB = yA * 9;
var celSize = 50;
var dx = xball - xplayer;
var dy = yball - yplayer;

function setup() {
    createCanvas(innerWidth - 20, innerHeight - 20);

    for (var i = 0; i < aantalBallen; i++) {

        var ballSize = random(20, 100);
        var ballspeedx = random(-4, 4);
        var ballspeedy = random(-4, 4);

        xplayer = 50;
        yplayer = 100;
        playerSize = 5;
        playerspeed = 2;
        playerxspeed = playerspeed;
        playeryspeed = playerspeed;

        bal = new Bal(random(20, innerWidth - 20), random(20, innerHeight - 20), ballSize, ballspeedy + 0.3 * i, ballspeedx + 0.3 * i, random(1, 255), random(1, 255), random(1, 255));
        ballen.push(bal);
    }
}

function drawplayer(xplayer, yplayer, playerSize){
    noStroke();
    fill(255, 255, 255);
    ellipse(xplayer, yplayer, playerSize, playerSize);
}

function drawCel(xB, yB, celSize){
  noStroke();
  fill(255);
  ellipse(xB, yB, celSize, celSize);
}

function draw() {
    background(0, 0, 0, 30);

    drawplayer(xplayer, yplayer, playerSize);
    drawCel(xB, yB, celSize, celSize);

    for (var i = 0; i < ballen.length; i++) {
        bal = ballen[i];
        bal.teken();
        bal.beweeg();
    }

    if (keyIsDown(65)) {
        xplayer -= playerxspeed;
        return false;
    } else if (keyIsDown(68)) {
        xplayer += playerxspeed;
        return false;
    } else if (keyIsDown(87)) {
        yplayer -= playeryspeed;
        return false;
    } else if (keyIsDown(83)) {
        yplayer += playeryspeed;
        return false;
    }

    if (Math.sqrt(dx*dx + dy*dy) <= playerSize + ballSize){
      console.log("botsing!!")
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
