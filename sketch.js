const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stone,object,ground;

function preload() {
 
}

function setup() {
  createCanvas(800,400);
  
  stone =new Stone(100, 200);
}

function draw() {
  background("#044787");  
  //stone("#FFD800")
  drawSprites();
  stone.display()
}






