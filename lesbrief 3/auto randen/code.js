var xCar; //Meest links boven
var yCar; //Meest links boven
var wheelSize;
var speed;

function setup() {
  //Canvas van 200 px bij 200 px
  createCanvas(400, 180);
  xCar = 50;
  yCar = 100;
  wheelSize = 24;
  speed = 3;
}

function draw() {
    //Één cijfer geeft grijswaarden
    background(220);
    drawCar(xCar, yCar, wheelSize);
    //width is de breedte van het canvas
    if (xCar > 300 || xCar < 0){
        speed = -speed;
    }
    xCar += speed;
};

function drawCar(xCar, yCar, wheelSize){
    //Geen randen om de auto
    noStroke();
    //Kies de opvulkleur (rgb)
    fill(255, 220, 115);
    //Parameters: x, y, breedte, hoogte
    rect(xCar, yCar, 110, 20);
    rect(xCar + 10, yCar-22, 70, 40);
    // Wielen
    stroke(255); //Witte randen voor de wielen
    strokeWeight(2); //Iets dikkere randen
    fill(12, 66, 66);
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize); //Parameters: x, y, breedte, hoogte
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    stroke(0); //Zwarte weg
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2); //Parameters: x1,y1,x2,y2
    //'width' is de breedte van je canvas
}
