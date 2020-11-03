var wall;
var bullet;
var tester = true;
var speed = Math.random(223,321);
var weight = Math.random(30,52);
var thickness = Math.random(22,83);

function setup() {
  createCanvas(1600,400);
  fill('#00ff00')
  wall = createSprite(1200, 200, thickness*10, height/2);
  bullet = createSprite(50, 200, 50, 10);
  //wall.shapeColor('green');
}

function draw() {
  background("black");
  bullet.velocityX = 10;
  if(isTouching(bullet, wall)){
    var damage = 0.5*(weight*speed*speed)/(thickness*thickness*thickness);
    text('The destruction is'+damage, 100, 100);
    bullet.velocityX = 0;
  }
  drawSprites();
}