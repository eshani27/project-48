var backgroundImg
var player,playerImg
var cop1, cop2, cop3, cop4, cop1Img, cop2Img, cop3Img, cop4Img
var money1, money2, money3, money1Img, money2Img, money3Img
var wallGroup
var copGroup
var  moneyGroup, score = 0

function preload(){
  backgroundImg = loadImage("backgroundImg.jpeg")
playerImg = loadImage("thief1.png")
  cop1Img = loadImage("cop1.png")
  cop2Img = loadImage("cop2.png")
  cop3Img = loadImage("cop3.png")
  cop4Img = loadImage("cop4.png")
  money1Img = loadImage("money1.png")
  money2Img = loadImage("money2.png")
  money3Img = loadImage("money3.png")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
player = createSprite(120,100)
player.addImage(playerImg)
player.scale = 0.15

wallGroup = new Group()
copGroup = new Group()
moneyGroup = new Group()

cop1 = createSprite(200,100)
cop1.addImage(cop1Img)
cop1.scale  = 0.15
cop1.velocityX = -2
cop1.velocityY = -2
copGroup.add(cop1)

cop2 = createSprite(800,100)
cop2.addImage(cop2Img)
cop2.scale  = 0.15
cop2.velocityX = -2
cop2.velocityY = -2
copGroup.add(cop2)

cop3 = createSprite(800,800)
cop3.addImage(cop3Img)
cop3.scale  = 0.15
cop3.velocityX = -2
cop3.velocityY = -2
copGroup.add(cop3)

cop4 = createSprite(200,800)
cop4.addImage(cop4Img)
cop4.scale  = 0.15
cop4.velocityX = -2
cop4.velocityY = -2
copGroup.add(cop4)

money1 = createSprite(500,300)
money1.addImage(money1Img)
money1.scale = 0.15
moneyGroup.add(money1)

money2 = createSprite(800,300)
money2.addImage(money1Img)
money2.scale = 0.15
moneyGroup.add(money2)

money3 = createSprite(300,300)
money3.addImage(money1Img)
money3.scale = 0.15
moneyGroup.add(money3)

money4 = createSprite(500,600)
money4.addImage(money2Img)
money4.scale = 0.30
moneyGroup.add(money4)

money5 = createSprite(700,400)
money5.addImage(money2Img)
money5.scale = 0.30
moneyGroup.add(money5)

money6 = createSprite(600,100)
money6.addImage(money2Img)
money6.scale = 0.30
moneyGroup.add(money6)

money7 = createSprite(200,700)
money7.addImage(money3Img)
money7.scale = 0.15
moneyGroup.add(money7)

money8 = createSprite(900,200)
money8.addImage(money3Img)
money8.scale = 0.15
moneyGroup.add(money8)

money9 = createSprite(650,300)
money9.addImage(money3Img)
money9.scale = 0.15
moneyGroup.add(money9)

money10 = createSprite(1000,500)
money10.addImage(money1Img)
money10.scale = 0.15
moneyGroup.add(money10)

money11 = createSprite(700,600)
money11.addImage(money1Img)
money11.scale = 0.15
moneyGroup.add(money11)

money12 = createSprite(1000,300)
money12.addImage(money1Img)
money12.scale = 0.15
moneyGroup.add(money12)

money13 = createSprite(1200,300)
money13.addImage(money2Img)
money13.scale = 0.30
moneyGroup.add(money13)

money14 = createSprite(1300,900)
money14.addImage(money2Img)
money14.scale = 0.30
moneyGroup.add(money14)

money15 = createSprite(1400,600)
money15.addImage(money2Img)
money15.scale = 0.30
moneyGroup.add(money15)



  var wall1 = createSprite(300,50,20,300)
  wall1.shapeColor = "blue"
  var wall2 = createSprite(700,200,300,20)
  wall2.shapeColor = "yellow"
  var wall3 = createSprite(50,50,20,700)
  wall3.shapeColor = "pink"
  var wall4 = createSprite(200,390,300,20)
  wall4.shapeColor = "red"
  var wall5 = createSprite(550,340,20,300)
  wall5.shapeColor = "red"
  var wall6 = createSprite(350,480,20,350)
  wall6.shapeColor = "red"
  var wall7 = createSprite(670,480,250,20)
  wall7.shapeColor = "red"
  var wall8 = createSprite(800,570,20,200)
  wall8.shapeColor = "red"
  var wall9 = createSprite(1050,350,20,350)
  wall9.shapeColor = "red"
  var wall10 = createSprite(885,350,350,20)
  wall10.shapeColor = "red"
  var wall11 = createSprite(950,660,300,20)
  wall11.shapeColor = "red"
  var wall12 = createSprite(840,140,20,100)
  wall12.shapeColor = "red"
  var wall13= createSprite(1155,170,230,20)
  wall13.shapeColor = "red"
  var wall14 = createSprite(210,650,300,20)
  wall14.shapeColor = "red"
  var wall15 = createSprite(570,800,20,300)
  wall15.shapeColor = "red"
  var wall16 = createSprite(1385,380,350,20)
  wall16.shapeColor = "red"
  var wall17 = createSprite(1250,750,20,400)
  wall17.shapeColor = "red"
  
  wallGroup.add(wall1)
  wallGroup.add(wall2)
  wallGroup.add(wall3)
  wallGroup.add(wall4)
  wallGroup.add(wall5)
  wallGroup.add(wall6)
  wallGroup.add(wall7)
  wallGroup.add(wall8)
  wallGroup.add(wall9)
  wallGroup.add(wall10)
  wallGroup.add(wall11)
  wallGroup.add(wall12)
  wallGroup.add(wall13)
  wallGroup.add(wall14)
  wallGroup.add(wall15)
  wallGroup.add(wall16)
  wallGroup.add(wall17)
  
  edge = createEdgeSprites()
}

function draw() 
{
  background(backgroundImg);
  player.collide(wallGroup)
  copGroup.bounceOff(edge)
  cop1.bounceOff(wallGroup)
  cop2.bounceOff(wallGroup)
  cop3.bounceOff(wallGroup)
  cop4.bounceOff(wallGroup)

  if(player.isTouching(moneyGroup)){
    score = score+10
  }
 if(keyDown(UP_ARROW)){
   player.y = player.y-5
 }
 if(keyDown(DOWN_ARROW)){
  player.y = player.y+5
  
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5
  }
if(player.isTouching(copGroup)){
  player.x= 120
  player.y = 100
}


  drawSprites();
  textSize(30)
  text("score "+score,900,100)
}

