// Sujet: objets et tableaux...
//
var balls = [];
var maxBalls;
var gravity = 0;
var offsetx, offsety, offsetvx, offsetvy;
var angle;
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  maxBalls = 1000;
  offsetx = windowWidth/2;
  offsety = windowHeight/2;
  offsetvx = 0;
  offsetvy = 0;
  angle = 0;
  
  for (var i = 0; i < maxBalls; i++) {
    balls[i] = new Ball();
    balls[i].initBall();
  }
}
//***************************************************
function draw() {
  background(0);
  
  offsety += offsetvy + 0.5*cos(angle);
  offsetx += offsetvx;
  angle += 0.01;
  
  for (var i = 0; i < maxBalls; i++) {
    balls[i].drawBall();
  }
  drawRocket(offsetx,offsety)
}
//***************************************************
function drawRocket(x,y){
  noStroke();
  fill(200);
  
  beginShape();
  vertex(x,y);
  vertex(x-3,y-5);
  vertex(x+7,y-8);
  vertex(x-10,y-15);
  vertex(x+20,y-15);
  vertex(x+5,y-14);
  vertex(x+40,y);
  endShape(CLOSE);
  
  fill(150);
  beginShape();
  vertex(x+40,y);
  vertex(x+5,y+14);
  vertex(x+20,y+15);
  vertex(x-10,y+15);
  vertex(x+7,y+8);
  vertex(x-3,y+5);
  vertex(x,y);
  endShape(CLOSE);
}
//***************************************************
function Ball() {

  this.initBall = function() {
    this.vx = random(-10, -2);
    this.vy = random(-1, 1);
    this.life = random(5, 25);
    this.maxlife = this.life;
    this.posx = random(-2,2);
    this.posy = random(-2,2);
    this.taille = random(2, 4);
    this.color = color(255, 255, 255, 200);
  }

  this.drawBall = function() {
    noFill;
    stroke(this.color);
    this.update();
    line(this.pposx+offsetx, this.pposy+offsety, this.posx+offsetx, this.posy+offsety);
  }

  this.update = function() {
    this.pposx = this.posx;
    this.pposy = this.posy;

    this.posx += this.vx;
    this.posy += this.vy;

    this.life--;
    this.color = color(255, 255 * (this.life / this.maxlife)*2, 255 * this.life / this.maxlife, 100);

    if (this.life < 0) {
      this.initBall();
    }
  }
}
//***************************************************
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    offsetvy = +10;
  } else if (keyCode === UP_ARROW) {
    offsetvy = -10;
  }else if (keyCode === LEFT_ARROW) {
    offsetvx = -10;
  }else if (keyCode === RIGHT_ARROW) {
    offsetvx = +10;
  }
}
function keyReleased() {
    easeout();
}
function easeout(){
  if(offsetvy > 0){
    offsetvy -= 1;
    easeout();
  }else if(offsetvy < 0){
    offsetvy += 1;
    easeout();
  }
  if(offsetvx > 0){
    offsetvx -= 1;
    easeout();
  }else if(offsetvx < 0){
    offsetvx += 1;
    easeout();
  }
}
//***************************************************