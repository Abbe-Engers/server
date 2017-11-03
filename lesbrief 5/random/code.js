var bal;
var ballen = [];
var aantalBallen = 10;
var xball;
var yball;
var ballSize;
var ballcolor;
var ballspeedx;
var ballspeedy;

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
    for (var i = 0; i < ballen.length; i++) {
        bal = ballen[i];
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

    this.teken = function() {
        noStroke();
        fill(this.ballcolor1, this.ballcolor2, this.ballcolor3, 50);
        ellipse(this.xPos, this.yPos, 2 * this.radius, 2 * this.radius);
    }

    this.beweeg = function() {
        if (this.xPos > width - this.radius || this.xPos < this.radius) {
            this.xSpeed = -this.xSpeed;
            if (this.xSpeed < 0) {
                this.xSpeed = -4;
            };
            elseif (this.xSpeed > 0) {
                this.xSpeed = 4;
            };
        };
        if (this.yPos > height - this.radius || this.yPos < this.radius) {
            this.ySpeed = -this.ySpeed;
            if (this.ySpeed < 0) {
                this.ySpeed = -4;
            };
            else if(this.ySpeed > 0) {
                this.ySpeed = 4;
            };
        }
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
        this.xSpeed = this.xSpeed + 4;
        this.ySpeed = this.ySpeed - 4;
    }
}
