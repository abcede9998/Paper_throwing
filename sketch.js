
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball;
var wall1, wall2, wall3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,690,1200,30);
	ball=new Ball(200,680,20);
	wall1=new Wall(1000,670,200,30);
	wall2=new Wall(890,635,30,100);
	wall3=new Wall(1110,635,30,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

keyPressed();


ground.display();
ball.display();
wall1.display();
wall2.display();
wall3.display();

}

function keyPressed() {
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:5,y:-12});
	}
}


