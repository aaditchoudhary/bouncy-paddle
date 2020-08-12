var paddle, paddle_Image;
var ball,ballImage;
var x;
var score;

function preload(){
  paddle_Image = loadImage("paddle.png");
  ballImage = loadImage("ball.png")
}

function setup() {
  createCanvas(400,400);
  
  paddle = createSprite(360,200,20,50);
  paddle.addAnimation("paddle", paddle_Image);
  paddle.scale = 0.9;
  
  ball = createSprite(200,200,400,20);
  ball.addImage("ball",ballImage);
  
  
  score=0;
}

function draw() {
  background("yellow");
  
  score = score+Math.round(getFrameRate()/60);
  text("Score: "+ score, 500,50);
  
  
  if(keyDown("up")) {
    paddle.velocityY = -10;
  }
  
  if(keyWentUp("up")) {
    paddle.velocityY = 0;
  }
  
  if(keyDown("down")) {
    paddle.velocityY = 10;
  }
  
  if(keyWentUp("down")) {
    paddle.velocityY = 0;
  }
  
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.bounceOff(edges[0]);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);

  if(keyDown("m")){
     ball.velocityX = 2;
     ball.velocityY = -2;
   }
  
  ball .bounceOff(paddle);

  drawSprites();
}
