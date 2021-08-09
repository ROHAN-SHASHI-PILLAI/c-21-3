
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball,ground,left,right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

   ball_options={
   isStatic:false,
   restitution:0.1,
   friction:0,
   density:2
   }

	//Create the Bodies Here.

	ball=Bodies.circle(70,10,20,ball_options);
	World.add(world,ball);

	ground =new Ground(400,390,800,20);
	right = new Ground(600,330,20,100); 
    left=   new Ground(400,330,20,100); 
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  ground.display();
  right.display();
  left.display();
  
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);

 
}

function keyPressed(){

if ( keyCode===UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:100,y:0});

    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-85});
    
}
}
