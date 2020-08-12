var block,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var world,engine;
var hexagon;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(400,380,800,10);

  block9 = new Block(100,300,50,50 );
  block8 = new Block(150,300,50,50 );
  block7 = new Block(200,300,50,50 );
  block6 = new Block(250,300,50,50 );
  block5 = new Block(300,300,50,50 );
  //level three
  block4 = new Block(130,250,50,50 );
  block3 = new Block(180,250,50,50 );
  block2 = new Block(230,250,50,50 );
  block1 = new Block(280,250,50,50);
   //top
  block = new Block(200,205,50,50);

  hexagon = new Hexagon(600,100,50,50);
  
  slingshot = new Slingshot(hexagon.body,{x : 600, y : 100 });
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  ground.display();
  block9.display();
  block8.display();
  block7.display();
  block6.display();
  block5.display();
  block4.display();
  block3.display();
  block2.display();
  block1.display();
  block.display();
  hexagon.display();
  drawSprites(); 
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode===32){
      slingshot.attach(hexagon.body);
  }
}