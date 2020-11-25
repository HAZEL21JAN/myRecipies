
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	dustbinBox1= new Dustbin(690,520,15,100);
	dustbinBox1.shapeColor=color("red");
	dustbinBox2= new Dustbin(890,520,15,100);
	dustbinBox2.shapeColor=color("red");
	dustbinBox3= new Dustbin(790,565,215,10);
	dustbinBox3.shapeColor=color("red");

	paperBall= new Paper(200,200,20);
	paperBall.shapeColor=color("green");

	ground= new Ground(500,565, width,10);
	

	Engine.run(engine);

	
}

keyPressed();

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:60,y:-60})
	}
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paperBall.display();
 dustbinBox1.display();
 dustbinBox2.display();
 dustbinBox3.display();
 ground.display();
}



