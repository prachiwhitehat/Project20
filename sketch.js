var car,wall;
var speed, weight;

var deformation;

function setup() {

  createCanvas(1200,400);
   
   speed = random(55,90);
   weight= random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  car.velocityX = speed;
  
  wall = createSprite(1100,200,50,height/2);
  wall.shapeColor = "grey";
}

function draw() {

  background(0,0,0); 

  if (wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX =0;
    car.overlap(wall);
    deformation = 0.5*weight*speed*speed/22509;

    if (deformation>180) {
      car.shapeColor = "red";
      
    }
    if (deformation>100 && deformation<180) {
      car.shapeColor = "yellow";
      
    }
    if (deformation<100) {
      car.shapeColor = "green";
      
    }

  }

  drawSprites();
}