const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowflakes = []
var maxsnowflakes = 100


function preload(){
  backgroundIMG = loadImage("snow1.jpg");
  boyIMG = loadImage("winter boy.png")
  girlIMG = loadImage("winter girl.png")
}
function setup() {
  createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

  ground = createSprite(600,500,1200,5)

  boy = createSprite(200,450)
  boy.addImage(boyIMG)

  girl = createSprite(500,500);
  girl.addImage(girlIMG);

  if(frameCount % 150 === 0){
    for(var i=0; i<maxsnowflakes; i++){
    snowflakes.push(new snowflake(random(0,1200), random(0,1200)));
    }
  }  
  
  
}

function draw() {
  background(backgroundIMG);  
  Engine.update(engine);

  if (keyDown(RIGHT_ARROW)){
    girl.x=girl.x+2
  }
  if (keyDown(LEFT_ARROW)){
    girl.x=girl.x-2
  }
  if (keyDown(UP_ARROW)){
    girl.y=girl.y-10
  }

  if(keyDown("d")){
    boy.x=boy.x+2
  }
  if(keyDown("a")){
    boy.x=boy.x-2
  }
  if(keyDown("w")){
    boy.y=boy.y-10
  }

    boy.collide(ground);
    girl.collide(ground);
   
    girl.velocityY = girl.velocityY + 0.4
    boy.velocityY = boy.velocityY + 0.4
  
  

  for(var i = 0; i<maxsnowflakes; i++){
    snowflakes[i].display();
    snowflakes[i].updateY()
    }
  drawSprites();

}