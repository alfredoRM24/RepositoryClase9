var box;
function setup() {
  createCanvas(700,600);
  box = createSprite(350,400,113,97);
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    box.x -= 7;
  }
  if(keyDown(RIGHT_ARROW)){
    box.x +=6.3;
  }
  if(keyDown(UP_ARROW)){
    box.y -= 6;
  }
  if(keyDown(DOWN_ARROW)){
    box.y += 7;
  }

 drawSprites();
}




