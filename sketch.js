
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var particles = [];
var plinkos = [];
var divisions= [];
var divisionHeight=300;
function setup() {
	createCanvas(480, 800);

	
	engine = Engine.create();
	 world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
 base = new Base(400,795,800,10)


 for (var k = 0 ; k<=width; k=k+80 ){

	divisions.push(new Division (k, height- divisionHeight/2, 10, divisionHeight))
	
	}

  for (j = 40; j<=width-10; j=j+50){
	  plinkos.push(new Plinko(j,25) )
  }

  for (j = 15; j<=width-10; j=j+50){
	plinkos.push(new Plinko(j,115) )
}

for (j = 40; j<=width-10; j=j+50){
	plinkos.push(new Plinko(j,205) )
}
for (j = 15; j<=width-10; j=j+50){
	plinkos.push(new Plinko(j,295) )
}

}
function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("grey");
  base.display();
  
  drawSprites();

  for(var k =0; k < divisions.length; k++){
	  divisions[k].display();
  }
  fill ("black")
  for(var j =0; j < plinkos.length; j++){
	plinkos[j].display();
}
if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }
}




