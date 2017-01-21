var posx, posy, taille, rayon, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  taille = 10;
  posx = 0;
  posy = 200;
  rayon = 50;
  angle = 0;
}

function draw() {
  //background(255);

  posx += map(mouseX,0,windowWidth,0.5,15);
  rayon = map(mouseY,0,windowWidth,10,400);
  
  angle += 0.1;
  
  posy = 200;
  posy += rayon * sin(angle);


  beginShape();
  vertex(posx, posy - taille);
  vertex(posx + taille, posy);
  vertex(posx, posy + taille);
  vertex(posx - taille, posy);
  endShape(CLOSE);
}