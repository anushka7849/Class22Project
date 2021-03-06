const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball,ball1,ball2;


function setup(){
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,370,400,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  var ball_options={
    restitution:1.0
  }
ball=Bodies.circle(100,100,20,ball_options);
World.add(world,ball);
ball1=Bodies.circle(250,250,10,ball_options);
World.add(world,ball1);
ball2=Bodies.circle(300,300,30,ball_options);
World.add(world,ball2);
}

function draw(){
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,10,10);
  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,30,30);
}