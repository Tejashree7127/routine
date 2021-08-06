var man,sleep
function preload(){
  sleep=loadAnimation("images/sleep.png")
}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  man = createSprite(300,230);
  man.addAnimation("rest",sleep);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}