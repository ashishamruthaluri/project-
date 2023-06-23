const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
 var rabbit,rabbitImg
var fruitGroup
var backgroundImg
var score=0
var gameState= "PLAY"
var obstacleGroup
var fruit1Img,fruit2Img,fruit1,fruit2
var waterImg
var coneImg
var ground
var cone
var puddle
var gameOver,gameOverImage


function preload(){
backgroundImg = loadImage ("street.jpg")
rabbitImg = loadImage ("rabbit.png")
coneImg = loadImage ("cone.png")
waterImg = loadImage ("puddle.png")
fruit1Img = loadImage ("orange.png")
fruit2Img = loadImage ("watermelon.webp")
gameOverImage = loadImage ("images.jpg")
fruitGroup = new Group()
obstacleGroup = new Group()

}




function setup() {
  createCanvas(600,600);
  frameRate(80)
    ground = createSprite(width/2,height/2,100,100)
    ground.velocityX= -2
    ground.visible=false
    ground.scale = 3
    engine = Engine.create();
    world = engine.world;
    ground.addImage(backgroundImg)
    rabbit = createSprite(50,450,10,5)
    rabbit.addImage(rabbitImg)
    rabbit.scale = 0.25
    gameOver = createSprite(height/2,width/2)
    gameOver.addImage(gameOverImage)
    gameOver.visible = false
    obstacleGroup = createGroup()
    fruitGroup = createGroup()
    
  
}


function draw() 
{
  ground.visible = true
  
  Engine.update(engine);
  text("Score:0",50,550)
  if (gameState = "PLAY") {
    ground.visible = true
    
    //rabbit.bounceOff(edges)
    if(ground.x < 200){
      ground.x = width/2}
      
      
            
            if (rabbit.isTouching(fruitGroup)){
            fruitGroup.destroyEach()
            score = +1
            }
            if (rabbit.isTouching(obstacleGroup)){
                rabbit.destroy()
                gameState = "end"
                
            
            
               
  }
   Controls()
    fruitObstacles()
  }
  if(gameState = "end"){
                  gameOver.visible = true
                  gameOver.scale = 3
                  rabbit.destroy()
                  rabbit.velocityX = 0
                  puddle.destroy()
                  puddle.velocityX = 0
                  cone.destroy()
                  cone.velocityX = 0
                  fruit1.destroy()
                  fruit1.velocityX = 0
                  fruit2.destroy()
                  fruit2.velocityX = 0
  }
  
              


  
 
              
                
                
                
                

                 
                  
                  
                  

  

                  
          
          drawSprites()
              }

    function Controls () {
     if (keyDown(LEFT_ARROW)){
rabbit.x -= 5
 }
 if (keyDown(RIGHT_ARROW)){
  rabbit.x += 5
   }
   if (keyDown(DOWN_ARROW)){
    rabbit.y += 5
     }
     if (keyDown(UP_ARROW)){
      rabbit.y -= 5
       }
     

    

    }
    function fruitObstacles(){
      if(frameCount%240==0){
        cone = createSprite(200,450)
        //cone.x=Math.round(random(0,50))
        cone.addImage("cone",coneImg)
        cone.scale=0.3
        cone.lifetime= 800
        cone.velocityX = -2
        obstacleGroup.add(cone)
        puddle = createSprite(370,500)
       puddle.addImage("puddle",waterImg)
        puddle.scale=0.2
        puddle.lifetime= 800
        puddle.velocityX = -2
        //puddle.x=Math.round(random(0,50))
        obstacleGroup.add(puddle)
        rabbit.depth=puddle.depth+1
        rabbit.depth=cone.depth+1
       fruit1 = createSprite(250,500)
       //cone.x=Math.round(random(0,50))
       fruit1.addImage("fruit1",fruit1Img)
       fruit1.scale=0.1
       fruit1.lifetime= 800
       fruit1.velocityX = -2
       fruitGroup.add(fruit1)
       fruit2 = createSprite(550,450)
      fruit2.addImage("fruit2",fruit2Img)
       fruit2.scale=0.05
       fruit2.lifetime= 800
       //puddle.x=Math.round(random(0,50))
       fruitGroup.add(fruit2)
       rabbit.depth=fruit1.depth+1
       rabbit.depth=fruit2.depth+1
       fruit2.velocityX=-2
      fruit1.velocityX=-2
      
       
      
        
        }
        
      
        }
      
        
        
        
        
        
        
        
    
    




  
      