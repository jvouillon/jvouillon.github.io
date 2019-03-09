var eposx, eposy, esize, angle, angle2, radius, dColor;
//**************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  angle = 0;	// ellipse size and main radius
  angle2 = 0;	// ellipse position

  noStroke();
  background(0,0,50);
}
//**************************************************
function draw() {
  angle += 1; // ellipseSize
  angle2 += 0.1; //randomGaussian(0.2,map(mouseX,0,windowWidth/2,0,0.3));

  radius = 50+250*cos(angle);

  posx = radius * sin(angle2) + windowWidth/2;
  posy = radius * cos(angle2) + windowHeight/2;
  
  posx = randomGaussian(posx,map(mouseY,0,windowHeight,0,20));
  posy = randomGaussian(posy,map(mouseY,0,windowHeight,0,20));
  esize = randomGaussian(5+map(mouseX,0,windowWidth,0,10));
  
  //dColor = map(dist(posx,posy,windowWidth/2,windowHeight/2),0,250,0,255);
  //fill(255,dColor,0);
  fill(randomGaussian(250,30),127*sin(angle2)+127,randomGaussian(0,30),randomGaussian(150,50));

  ellipse(posx,posy,esize);

}