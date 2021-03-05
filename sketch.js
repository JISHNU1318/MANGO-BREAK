
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");

}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1120,200,20);
	mango3=new mango(1000,50,40);
	mango4=new mango(1100,50,20);
	mango5=new mango(1000,150,35);
	mango6=new mango(1150,280,25);
	mango7=new mango(1000,200,20);
	mango8=new mango(1200,120,20);
	mango9=new mango(1100,200,20);

	stoneObj=new Stone();

	
	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  console.log(mouseX,mouseY);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
  stoneObj.display();

  groundObject.display();
}
