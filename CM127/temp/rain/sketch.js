// Sujet: objets et tableaux...
//
var balls = [];
var maxBalls;
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  maxBalls = 500;
  for(var i=0; i<maxBalls; i++){
    balls[i] = new Ball();
  }
}
//***************************************************
function draw() {
  background(0);
  for(var i=0; i<maxBalls; i++){
    balls[i].drawBall();
  }
}
//***************************************************
function Ball() {
  this.posx = random(0, windowWidth);
  this.posy = random(0, windowHeight);
  this.taille = random(1,5);
  this.couleur = color(100, 100, 250);
  this.vx = 0;
  this.vy = 1;
  this.speed = random(1, 9);

  this.drawBall = function() {
    fill(this.couleur);
    noStroke();
    ellipse(this.posx, this.posy, this.taille);
    this.update();
  }
  this.update = function() {
    if(this.posy > windowHeight){
      this.posy = random(-200,-50);
      this.posx = random(0, windowWidth);
      this.speed = random(1, 9);
    }
    this.posx += this.vx * this.speed;
    this.posy += this.vy * this.speed;
  }
}
//***************************************************
