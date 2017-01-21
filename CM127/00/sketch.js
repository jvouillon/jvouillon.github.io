var taille, couleur;

function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  noStroke();
  taille = 200;
  couleur = 0;
}

function draw() {
  fill(couleur);
  rect(200,200,taille,taille);
  taille -= 1;
  couleur += 1;
  
}