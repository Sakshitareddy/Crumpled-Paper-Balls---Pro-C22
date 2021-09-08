const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var groundObj;

var leftSide, rightSide;


function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(500,380,1000,10);

	leftSide = new Ground(700,340,10,70);
	rightSide = new Ground(850,340,10,70);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	fill("turquoise");
	ball = Bodies.circle(100,100,20,ball_options);
	World.add(world, ball);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ellipse(ball.position.x,ball.position.y,20);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  console.log("X: " + ball.position.x);
  console.log("Y: "+ ball.position.y);

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	//Matter.Body.applyForce(ball,{x:400,y:340}, {x:1,y:-1});
	Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y}, {x:2,y:-2});
	//ball.position.x=ball.position.x+20;
	//ball.position.y=ball.position.y+20;
}
}   