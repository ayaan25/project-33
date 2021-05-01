var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particle ;
var plinkos = [];
var divisions =[];
var turn = 0;

var gameState ="play";



var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}

function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 text(" 500 ",20,550)
 text(" 500 ",100,550)
 text(" 500 ",180,550)
 text(" 500 ",260,550)
 text(" 100 ",340,550)
 text(" 100 ",420,550)
 text(" 100 ",500,550)
 text(" 200 ",580,550)
 text(" 200 ",660,550)
 text(" 200 ",740,550)
 if (particle!=null){
  particle.display();

if(particle.body.position.y >549){

if(particle.body.position.x<300){
  score = score+500;
  particle = null;
  turn = turn+1;
  if (turn===5){
    gameState = "end";
  }
}
  else if(particle.body.position.x>301 & particle.body.position.x<600){
    score=score+100;
    turn = turn+1;
    particle = null;
    if (turn===5){
      gameState = "end";
    }
  }
  else if(particle.body.position.y>601 & particle.body.position.y<900){
    score=score+200;
    turn = turn+1;
    particle = null;
    if (turn===5){
      gameState = "end";
    }
  }
}

}
if (gameState ==="end"){
  textSize(20);
fill("white");
text("Game Over",400,400);


}


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
if(gameState!=="end"&& turn<5){
  turn++ ;
  particle = new Particle(mouseX,10,10);
}
}