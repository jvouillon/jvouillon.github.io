var rayon1, rayon2, segments;
var posx, posy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posx = windowWidth / 2;
  posy = windowHeight / 2;
  fill(255,0,0);
  strokeWeight(3);
}

function draw() {
  background(255);
  rayon1 = 200;
  rayon2 = 120;
  segments = floor(map(mouseX,0,windowWidth,3,30));
  angle = TWO_PI / segments;
  beginShape();
  for (var i = 0; i < segments; i++) {
    vertex(posx + rayon1 * cos(i * angle), posy + rayon1 * sin(i * angle));
    vertex(posx + rayon2 * cos(i * angle+angle/2), posy + rayon2 * sin(i * angle+angle/2));
  }
  endShape(CLOSE);
}