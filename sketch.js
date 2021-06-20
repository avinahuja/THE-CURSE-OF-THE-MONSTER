const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box = [];
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var PLAY = "PLAY",END= "END";
var gamestatus = PLAY;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  for(var i=0; i < 25; i++){
    var randomNumber = Math.round(random(1,4));
    if(randomNumber == 1) box[i]= new Box(900,100,70,70);
    else if(randomNumber == 2) box[i]= new Box(800,100,70,70);
    else if(randomNumber == 3) box[i]= new Box(700,100,70,70);
    else if(randomNumber == 4) box[i]= new Box(600,100,70,70);
  }
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  for(var i=0; i <25; i++){
    box[i].display();
  }
 

  hero.display();
  rope.display();
  monster.display();
  //console.log(monster.body.position.y);
  if(monster.body.position.y > 600){
      gamestatus = END
      fill("red")
      textSize(20)
      text("YOU HAVE BEEN CURSED!!!!!!!!!!!!!!!!!!",600,100)
    }
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  rope.fly();
  
}
