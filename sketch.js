var planeIMG, plane;
var ground, groundIMG, invisibleGround;
var star, starIMG, starsGroup;
var bullet, bulletIMG, bulletGroup;
var alien, alienIMG, alienGroup;
var bulletGroup;
var alien2Group,alien3Group,alien2,alien3,alien2IMG , alien3IMG;

var gameState ="play";
var score = 0;

function preload()
{
	planeIMG=loadImage("plane1Image.png");
	starIMG = loadImage("star1IMage.png");
	groundIMG = loadImage("backgrIMage.jpg");
	bulletIMG = loadImage("bulletImage.png");
  alienIMG = loadImage("alien1Image.png");
	alien2IMG = loadImage("alien2.png");
  alien3IMG = loadImage("alien3.png")


}

function setup() {
	rectMode(CENTER);
	var canvas = createCanvas(900,700);

	ground = createSprite(200,200);
	ground.addImage(groundIMG);
	ground.x = 450;
	ground.velocityX = 2;

  plane=createSprite(700, 200, 10,10);
	plane.addImage(planeIMG);
	plane.scale=0.7;
	
 bulletGroup = new Group();
 starsGroup = new Group();
 alienGroup = new Group();
 alien2Group = new Group();
 alien3Group = new Group();

}


function draw() {
  rectMode(CENTER);
  background(0);

 plane.y = mouseY;
 


 if(gameState ==="play"){

  //release arrow when space key is pressed
  if (keyDown("space")) {
  
    spawnBullets();

  }

  if(ground.x>650){
    ground.x = 450;
}
textSize(20);
fill("white");
text(score,850,20);

  if(bulletGroup.isTouching(alienGroup)){
     alienGroup.destroyEach();
     bulletGroup.destroyEach();
     score ++;
  }

  if(bulletGroup.isTouching(alien3Group)){
    alien3Group.destroyEach();
    bulletGroup.destroyEach();
    score ++;
 }

 if(bulletGroup.isTouching(alien2Group)){
  alien2Group.destroyEach();
  bulletGroup.destroyEach();
  score ++;
}

  spawnStars();
  spawnAliens();
  spawnAliens2();
  spawnAliens3();

  if(alienGroup.isTouching(plane) ){
     plane.visible = false;
     gameState ="end";
  }

 }
 else if(gameState ==="end"){
  ground.velocityX = 0;
  starsGroup.setVelocityXEach(0);
  alienGroup.setVelocityEach(0);
textSize(50);
fill("white");
text( "GAME OVER !!!!",400,350)
 
 }

  
  drawSprites();
 
}

function spawnAliens(){

  if(frameCount % 150 === 0){
    alien = createSprite(-5,random(10,500),3,3);
    alien.addImage(alienIMG);
    alien.scale = 0.3;
    alien.velocityX = 5;
    alien.lifetime = 800;
    alienGroup.add(alien);
}
}


function spawnAliens2(){

  if(frameCount % 200 === 0){
    alien2 = createSprite(-55,random(10,500),3,3);
    alien2.addImage(alien2IMG);
    alien2.scale = 0.3;
    alien2.velocityX = 5;
    alien2.lifetime = 800;
    alien2Group.add(alien2);
}
}

function spawnAliens3(){

  if(frameCount % 170 === 0){
    alien3 = createSprite(-25,random(10,500),3,3);
    alien3.addImage(alien3IMG);
    alien3.scale = 0.3;
    alien3.velocityX = 5;
    alien3.lifetime = 800;
    alien3Group.add(alien3);
}
}

function spawnStars(){

	if(frameCount % 10 === 0){
   var star = createSprite(-5,random(10,500),3,3);
   star.addImage(starIMG);
   star.scale = 0.3;
   star.velocityX = 5;
   star.lifetime = 800;
   starsGroup.add(star);

  }
}

function spawnBullets(){
  bullet = createSprite(650,270,20,10);
  bullet.addImage(bulletIMG);
 bullet.y = plane.y;
 bullet.scale = 0.1;
 bullet.lifetime = 400;

  bullet.velocityX = -4;
  bulletGroup.add(bullet);
}


