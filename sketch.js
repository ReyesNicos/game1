const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



var p1, cpu, fire




var P1 = 1
var P2 = 2
var START = 0
var gamemode = 0
var move = 20

var start_x = 0;
var start_y = 0;
var speed = 100;
var velx; 
var vely; 
var angle;
var radians;
var time;
var distance;

function preload(){

}

function setup() {
  createCanvas(2000, 600);
  angle = 45; 
  
  engine = Engine.create();
  world = engine.world;
 
  gr = new ground(1000,590,2000,10)
  p1 = new player(100,575,10,10)
  cpu = new player(1900,575,10,10)
  fire = new shot(p1.x,p1.y)
}

function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  
  

 
  
	if(gamemode == START){
    text("press enter to start", 1000, 300)
    
    
    
    if(keyCode===ENTER){
      gamemode = P1
    }
 
  }
  if(gamemode == P1){
    gr.display();
    p1.display();
    cpu.display();
    
    mechanics();
    
    fill(255,255,255)
    textSize(20)
    text("angle:"+ angle,50,50)
    text("power:"+ speed,50,30)
    text("moves:"+ move,50,10)
 
    
    
    if(keyDown("space")) {
      fire.display();
      fire.velocityY = -vely/10;
      fire.velocityX = velx/10;
      gamemode = P2;
    }


  
    if(fire.isTouching(gr)){
      fire.velocityX=0
      fire.velocityY=0
    }
  }
  
  console.log(fire.x-p1.x)
}
function mechanics() {

  


    radians = angle * (Math.PI / 180);
    
    time = 1;
    distance = speed * time;
    
    
    velx = Math.cos(radians) * distance;
    vely = Math.sin(radians) * distance;

	if(keyDown("d") && move > 0){
			p1.x = p1.x + 5;
		  move = move -1
			   
	}
	
	if(keyDown("a") && move > 0){
      p1.x = p1.x - 5;
      move = move -1
				
	}
	
	if (keyDown("down_arrow") && angle >0) {
	    angle = angle -1
	}
	if (keyDown("up_arrow") && angle <90) {
	    angle = angle +1
	}

  }
//not really an "AI"
function AI(){
  md = Math.random(round(5,10))
  d = Math.random(round(0,1))
  if (d = 0){
    cpu.x=cpu.x-md
  }else if(d = 1){
    cpu.x=cpu.x+md
  }
}
