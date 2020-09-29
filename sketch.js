var banana,banana1,bananaGroup;
var monkey,monkey1;
var stone,stone1,stoneGroup;
var back,back1;
var score;    
var ground;

function preload(){
  // PRELOADING THE IMAGES
  
  banana1=loadImage("https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/9972a9b8-a53c-4b9b-8c81-7a5d19e20893.png");
  monkey1=loadAnimation("https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/c85fa2c3-db3c-4059-b580-39048682daba.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/5af4ab34-49f5-4a52-b3ea-89ef228fab32.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/7b3249c8-aa4a-43da-98e3-bcde91013b2f.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/491bb5b3-d55a-4c22-b34f-555f0ac7950a.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/e73d3f75-ccbc-4439-8f6d-c8b00bde19df.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/9f658246-4391-41b0-9d37-78ae10b20cde.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/844b7488-4000-4195-ae5e-bf7625406c1b.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/cc1d580c-1360-4bc4-a25e-f4709576c42e.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/b6c820f9-6387-458d-b12a-d5ebdf8b4f2d.png","https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/8421a4e3-1bd1-4f2a-ab37-0a2cb0f0cb14.png");
  stone1=loadImage("https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/8917d819-fcf5-4066-b4cd-56adc59f7311.png");
  back1=loadImage("https://assets.editor.p5js.org/5f48af6bcb5dc70024de3b14/072423e4-83e4-492a-ad55-59222e1fbd88.jpg");
  
 // CREATING GROUPS
  BananaGroup = new Group();
  StoneGroup = new Group();
                        

}



function setup() {
  createCanvas(800,400);
  
  // CREATING THE BACKGROUND
  back=createSprite(0,0,800,400);
  back.addImage(back1);
  back.scale=1.5;
  back.x=back.width/2;
  back.velocityX=-4;
  
   
  ground=createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  
  
  monkey= createSprite(100,340,20,50);
  monkey.addAnimation("monkey",monkey1);
  monkey.scale = 0.3;
  
   
  score = 0;
  
}


function draw() {
  background(220);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
  if(back.x<100){
    back.x=back.width/2;
  }
  
 
  if(BananaGroup.isTouching(monkey)){
      BananaGroup.destroyEach();    
       monkey.scale=0.3;
    score = score + 2;
    }
  
  

  
  switch(score){
    case 10 : monkey.scale=0.12;
      break;
      
    case 20 : monkey.scale=0.14;
      break;
      
    case 30 : monkey.scale=0.16;
      break;
    
    case 40 : monkey.scale=0.18;
      break;
      
    default : break;
  
  }
  
  
 
  if(keyDown("space") && monkey.y >= 235) {
      monkey.velocityY = -15;
    }
  
 
    monkey.velocityY = monkey.velocityY + 0.8;
  
  
    monkey.collide(ground);
  
  
  
  if(StoneGroup.isTouching(monkey)){ 
      monkey.scale=0.10 ;
      score=score-2;
    score=0;
  }
 
  SpawnBanana();
  SpawnStones();
  
  drawSprites();
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
}


function SpawnBanana() {
 
  if (frameCount % 100 === 0) {
    
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(banana1);
    banana.scale = 0.05;
    banana.velocityX = -5;
     
  
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
      
    BananaGroup.add(banana);
  }
}

function SpawnStones() {
  if(frameCount % 150 === 0) {
     
    var stone = createSprite(800,320,10,40);
    stone.velocityX = -6;
    stone.addImage(stone1);
    

    stone.scale = 0.2;
    stone.lifetime = 300;
    
    StoneGroup.add(stone);
  }
}