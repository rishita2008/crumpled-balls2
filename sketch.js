
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin2,paper,ground;
var dustbin1,dustbin3,dustbinSprite;
var paperObject;
var d;

function preload(){
d=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);
	background("blue")
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground
	paper=new Paper()
	dustbin1= new Dustbin(960,590,10,150);
	dustbin2= new Dustbin(1100,570,10,200)
	dustbin3= new Dustbin(1030,656,130,10)
	dustbinSprite=createSprite(1020,546,300,40)
	dustbinSprite.scale=0.7

 

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin3.display();
  dustbin1.display();
  dustbin2.display();
  ground.display();
  dustbinSprite.display()
  dustbinSprite.addImage(d);
  

  keyPressed()
  
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:4,y:-4})
	}
}



