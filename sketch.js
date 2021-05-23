
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobj,groundobj,dustbin1,dustbin2,dustbin3; 

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperobj = new Paper(200,450,70)

	groundobj = new Ground(400,650,800,15);

	dustbin1=new Dustbin (462,518,20,100);
	dustbin2=new Dustbin (738,518,20,100);

	 dustbin3 = new Dustbin();



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(360);
  dustbin1.display();
  dustbin2.display();

groundobj.display();
 dustbin3.display();
 paperobj.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145});
	}
}

