var tigerRunning,tiger;
var hunterRunning, hunter;
var backGround1,backGroundImage1,backGround2,backGroundImage2,backGround3,backGroundImage3;
var invisGround
var cactus,cactusImage,pine,pineImage,rock,rockimage;
var obstacleGroup,foodGroup;

function preload()
{
	tigerRunning = loadAnimation("s1.png","s2.png","s3.png","s4.png","s5.png","s6.png");
	hunterRunning = loadAnimation("hunt1.png","hunt2.png","hunt3.png","hunt4.png");
	backGroundImage1 = loadImage("back1.jpeg");
	backGroundImage2 = loadImage("back2.jpeg");
	backGroundImage3 = loadImage("back3.jpeg");
	cactusImage = loadImage("cac.png");
	pineImage = loadImage("pine.png");
	rockimage = loadImage("rock.png");
}

function setup() {
	createCanvas(600, 400);

	foodGroup = createGroup();
	obstacleGroup = createGroup();
	

	tiger = createSprite(200,335,20,20);
	tiger.addAnimation("running",tigerRunning);
	tiger.scale = 0.5

	backGround1 = createSprite(300,200,600,400);
	backGround1.velocity = -4;
	backGround1.addImage(backGroundImage1);
	backGround1.x = backGround1.width/2;
	backGround1.scale = 0.99;
	tiger.depth = backGround1.depth+1;

	invisGround = createSprite(300,379,600,5);
	
	hunter = createSprite(100,335,20,20);
	hunter.addAnimation("running",hunterRunning);
	hunter.scale = 0.5;
  
}


function draw() {
 
  background(0);
  if(backGround1.x < 0){
	  backGround1.x = backGround1.width/2;
  }
  if(backGround2.x < 0){
	  backGround2.x = backGround2.width/2;
  }
  if(backGround3.x < 0){
	backGround3.x = backGround3.width/2;
}

if(keyDown("space")){
	tiger.velocityY = tiger.velocityY + 1;
}
tiger.velocityY = tiger.velocityY + 1;
tiger.collide(invisGround);

  
  drawSprites();
 
}



