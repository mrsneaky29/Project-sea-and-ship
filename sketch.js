var seaImage;
var Ship_animation;
var shipSprite;
var sea;


function preload(){
seaImage = loadImage("sea.png");
Ship_animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  shipSprite.createSprite(200,125);
  shipSprite.addAnimation(Ship_animation);
  sea.createSprite(200,180,400,20);
  sea.addImage(seaImage);
  sea.x=sea.x.width/2
  ship.addAnimation("movingShip",Ship_animation);
   if(sea.x < 0){ sea.x = sea.width/8; }
   shipSprite.scale=1;
}

function draw() {
  sea.velocityX=-2
 
  if(sea.x<0){
   sea.x=ground.x.width/2
 }
 drawSprites();
}