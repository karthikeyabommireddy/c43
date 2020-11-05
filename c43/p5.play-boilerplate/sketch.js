var trackImage;
var track1
function preload(){
trackImage=loadImage("track.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 track1=createSprite(0,0,displayWidth,displayHeight);
 track1.addImage(trackImage);
 track1.scale=2.5;
 track1.y=displayHeight/2
}

function draw() {
  background(255,255,255);  
  track1.velocityY=3;
  if(track1.y<displayHeight/2){
    track1.y=displayHeight/2
  }

  drawSprites();
}