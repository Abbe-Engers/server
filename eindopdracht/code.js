var xplayer; //Meest links boven
var yplayer; //Meest links boven
var playerSize;
var playerspeed;

function setup() {
  createCanvas(innerWidth - 20, innerHeight - 20);

  xplayer = 50;
  yplayer = 100;
  playerSize = 50;
  playerspeed = 5;
  opacity = 20;
  playerxspeed = playerspeed;
  playeryspeed = playerspeed;
}

function draw() {
    background(255, 255, 255, opacity)
    drawplayer(xplayer, yplayer, playerSize);

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
}

function drawplayer(xplayer, yplayer, playerSize){
    noStroke();
    fill(0);
    fill(200, 40, 40);
    ellipse(xplayer, yplayer, playerSize, playerSize);
}
