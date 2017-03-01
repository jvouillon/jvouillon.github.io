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
  background(255);
  for(var i=0; i<maxBalls; i++){
    balls[i].drawBall();
  }
}
//***************************************************
function Ball() {
  this.posx = random(0, windowWidth);
  this.posy = random(0, windowHeight);
  this.taille = random(5, 15);
  this.couleur = color(255, 0, 0, 150);
  this.vx = random(-1, 1);
  this.vy = random(-1, 1);
  this.speed = random(3, 9);

  this.drawBall = function() {
    fill(this.couleur);
    stroke(200,0,0);
    ellipse(this.posx, this.posy, this.taille);
    this.update();
  }
  this.update = function() {
    if (this.posx > windowWidth - this.taille / 2 || this.posx < this.taille / 2) {
      this.vx = -this.vx;
    }
    if (this.posy > windowHeight - this.taille / 2 || this.posy < this.taille / 2) {
      this.vy = -this.vy;
    }
    this.posx += this.vx * this.speed;
    this.posy += this.vy * this.speed;
  }
}
//***************************************************
