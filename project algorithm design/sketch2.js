const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
 
var engine ;
var world ;
var box1;
function setup(){
  createCanvas(1200,600); 
  engine = Engine.create();
  world = engine.world;
  box1 = new box(940,510,80,80);
  box2 = new box(1110,510,80,80);
  pig1 = new pig(1030,510);
  stick1 = new stick(1030,560,170,PI);
  RED = new bird(300,300);
  ground = new edge(600,580,1200,30);
 hground = new edge(160,415,350,300);
}
function draw(){
    background(rgb(173,216,38));
    Engine.update(engine);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    hground.display();
    pig1.display();
    stick1.display();
    RED.display();
}
