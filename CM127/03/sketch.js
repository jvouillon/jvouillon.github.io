var rayon, angle;
var x1, y1, x2, y2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  rayon = 200;
  angle = 0;
}

function draw() {
  //OPTION 1
/*
  angle = angle + 0.1;
  rayon = map(mouseX,0,windowWidth,30,600); 
  fill(random(0,255),random(0,255),random(0,255));
  ellipse(windowWidth/2+rayon*cos(angle),windowHeight/2+rayon*sin(angle),20,20);
  */
  
  //OPTION 2
  
  angle = angle + map(mouseY,0,windowHeight,0.05,2);
  rayon = map(mouseX,0,windowWidth,30,600);
  stroke(255,0,0);
  x2 = windowWidth/2+rayon*cos(angle);
  y2 = windowHeight/2+rayon*sin(angle);
  line(x1,y1,x2,y2);
  x1 = x2;
  y1 = y2;
}