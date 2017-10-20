var xCar;
var yCar;
var xSize = 400;
var ySize = 180;
var wheelSize;

function setup() {
  createCanvas(xSize, ySize);
  xCar = 50;
  yCar = 100;
  wheelSize = 24;
}

function draw() {
    background(220); //Één cijfer geeft grijswaarden
    drawCar(xCar, yCar, wheelSize);
    xCar += 1;
};

function drawCar(xCar, yCar, wheelSize){
    noStroke();
    fill(100, 170, 50);
    rect(xCar, yCar, 110, 20);
    rect(xCar + 15, yCar-10, 80, 10);
    rect(xCar + 25, yCar-25, 60, 15);
    rect(xCar + 40, yCar-20, 80, 5);
    // Wielen
    stroke(255);
    strokeWeight(2);
    fill(12, 66, 66);
    ellipse(xCar + 18, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 43, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 68, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 93, yCar + 21, wheelSize, wheelSize);
    stroke(0);
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2);
}
