const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var polygon, polygon_img;
var score = 0;
//var backgroundImg;

function preload() {
    polygon_img=loadImage("polygon.png");
    //getBackgroundImg();
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390, 270, 300, 10);

    block1 = new Box(330, 235, 30, 40);
    block2 = new Box(360, 235, 30, 40);
    block3 = new Box(390, 235, 30, 40);
    block4 = new Box(420, 235, 30, 40);
    block5 = new Box(450, 235, 30, 40);
    
    block6 = new Box(360, 195, 30, 40);
    block7 = new Box(390, 195, 30, 40);
    block8 = new Box(420, 195, 30, 40);

    block9 = new Box(390, 155, 30, 40);

    //polygon = new Polygon(50,200,20);
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    //background(backgroundImg);
    background(0);
    noStroke();
    textSize(35);
    fill("white");
    text("Score:" + score, width-300, 50);
    //Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    stand1.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    

    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}

/*
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13);
    if (hour >= 06 && hour <= 19){
        var backgroundImg = (255,255,255);
    }
    else {
        var backgroundImg = (1,1,1);
    }
    console.log(backgroundImg);
}
*/