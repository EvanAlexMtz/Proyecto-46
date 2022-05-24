var background, backgroundImage;
var Menubackground, MenubackgroundImage;
var gameState = "Menu"; 
function preload(){
backgroundImage = loadImage("Images/forest.jpg");
MenubackgroundImage = loadImage("Images/Menu.jpg")


}
function setup(){
createCanvas (windowWidth, windowHeight);
textFont("Viner Hand ITC");
fill("black");
textSize(30);
strokeWeight (2.5); 
stroke("white");
this.button = createButton("Iniciar juego");
//this.button.position(displayWidth/2 - 100, displayHeight/2 - 80);
this.button.class("costumButton");


}

function draw(){
background (backgroundImage);
if(gameState == "Pantalla inicial"){
    background(MenubackgroundImage)
    
    
    textFont("Viner Hand ITC");
    fill("black");
    textSize(100);
    strokeWeight (2.5); 
    stroke("white");
    text("Dark Vessels", displayWidth/2 - 300, displayHeight/2 - 250);
    
    
}
/*if(mousePressedOver(button)){
    gameState == "Menu"
    background(MenubackgroundImage)
}*/
if(gameState == "Menu"){
    background(MenubackgroundImage)
    textSize(100);
    strokeWeight (2.5);
    text("Menu", displayWidth/2 - 300, displayHeight/2 - 250);
    textSize(25);
    strokeWeight (2.5);
    text("Opciones", displayWidth/2 - 60, displayHeight/2 - 50);
    textSize(25);
    strokeWeight (2.5);
    text("Juego", displayWidth/2 - 40, displayHeight/2 - 25);
    
}
if(keyWentDown("J") && gameState == "Play") {
   
    background(backgroundImage)
}


}



