var fixedRect, movingRect;
var istouching;
var lol,xd;

function setup() {
  createCanvas(1200,800);
  
  lol = createSprite(600,300,20,20);
  lol.shapeColor = "blue";
  xd = createSprite(500,500,20,20);
  xd.shapeColor = "cyan";
}

function draw() {
  background(0,0,0);  
  lol.x = World.mouseX;
  lol.y = World.mouseY;
  if(istouching(lol,xd))
 {
    xd.shapeColor = "red";
    xd.shapeColor = "red";
  }
  else {
    xd.shapeColor = "green";
    xd.shapeColor = "green";
  }
  drawSprites();
}
function istouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;
    }
else{
  return false;
}
}