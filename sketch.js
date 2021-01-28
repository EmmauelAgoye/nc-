
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	pendulum1 = new Pendulum(canvas.width/2-100, canvas.height/2, "white");
	pendulum2 = new Pendulum(pendulum1.x+60, canvas.height/2, "white");
	pendulum3 = new Pendulum(pendulum2.x+60, canvas.height/2, "white");
	pendulum4 = new Pendulum(pendulum3.x+60, canvas.height/2, "white");
	pendulum5 = new Pendulum(pendulum4.x+60, canvas.height/2, "white");
	sling1 = new Sling(pendulum1.body, {x:pendulum1.x, y:pendulum1.y-150});
	sling2 = new Sling(pendulum2.body, {x:pendulum2.x, y:pendulum2.y-150});
	sling3 = new Sling(pendulum3.body, {x:pendulum3.x, y:pendulum3.y-150});
	sling4 = new Sling(pendulum4.body, {x:pendulum4.x, y:pendulum4.y-150});
	sling5 = new Sling(pendulum5.body, {x:pendulum5.x, y:pendulum5.y-150});
	


	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	rectMode(CENTER);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}




