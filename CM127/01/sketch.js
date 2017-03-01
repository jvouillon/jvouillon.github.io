//la fonction setup() est appelée une seule fois
// et sert à initialiser certains réglages
function setup() {
  //createCanvas: permet de spécifier les dimensipons du canvas
  //windowWidth/windowHeight:largeur et hauteur de la fenêtre du mavigateur
  createCanvas(windowWidth,windowHeight);
}

// La fonction draw() est appellée 60 fois par seconde!
function draw() {
  //background 
  //background(255);
  
  //couleur de remplissage RGB+Alpha
  fill(random(0,255),random(0,255),random(0,255),random(0,255));
  
  //couleur du contour RGB
  stroke(0,0,255);
  
  //largeur du contour en pixel
  strokeWeight(5);
  
  //pas de contour!
  noStroke();
  
  //dessine une ellipse
  //de diamètre aléatoire compris entre 10 et 100
  //et positionnée aux coordonnées de la souris
  //ellipse(mouseX,mouseY,random(10,100));
  
  //dessine un rectangle aux coordonnées de la souris
  rect(mouseX,mouseY,100,100);
  //line(0,0,mouseX,mouseY);
}