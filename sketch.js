
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	f1 = new roof(600,100,800,35);

	b1 = new bob(500,500,30);
	b2 = new bob(550,500,30);
	b3 = new bob(600,500,30);
	b4 = new bob(650,500,30);
	b5 = new bob(700,500,30);

	r1 = new Rope(b1.body,{x:500,y:100});
  r2 = new Rope(b2.body,{x:550,y:100});
  r3 = new Rope(b3.body,{x:600,y:100});
  r4 = new Rope(b4.body,{x:650,y:100});
  r5 = new Rope(b5.body,{x:700,y:100});
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightblue");

  f1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-20,y:2});
  }
}


