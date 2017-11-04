var xball; //Meest links boven
var yball; //Meest links boven
var ballSize;
var speed;
var opacity;

function setup() {
//  createCanvas(innerWidth - 20, innerHeight - 20);
  createCanvas(innerWidth - 20, innerHeight - 20);

  xball = 50;
  yball = 100;
  ballSize = 50;
  speed = 5;
  opacity = 20;
  xspeed = speed;
  yspeed = speed;
}

function draw() {
    background(255, 255, 255, opacity)
    drawCar(xball, yball, ballSize);
    xball += xspeed;
    yball += yspeed;
    if (xball > width - ballSize || xball < ballSize/2){
        xspeed = -xspeed;
    }
    if (yball > height - ballSize || yball < ballSize/2){
        yspeed = -yspeed;
    }

};

function drawCar(xball, yball, ballSize){
    noStroke();
    fill(0);
    fill(200, 40, 40);
    ellipse(xball, yball, ballSize, ballSize);
    ellipse(xball, yball, ballSize, ballSize);
}
