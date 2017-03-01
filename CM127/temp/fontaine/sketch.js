// Sujet: objets et tableaux...
//
var balls = [];
var maxBalls;
var gravity = 4;
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  maxBalls = 1000;
  for (var i = 0; i < maxBalls; i++) {
    balls[i] = new Ball();
    balls[i].initBall();
  }
}
//***************************************************
function draw() {
  background(0);
  for (var i = 0; i < maxBalls; i++) {
    balls[i].drawBall();
  }
}
//***************************************************
function Ball() {;
  
  this.initBall = function() {
    this.vx = random(-10, 10);
    this.vy = random(map(mouseY,0,windowHeight,-80,20));
    this.life = random(30, 120);
    this.maxlife = this.life;
    this.posx = random(windowWidth / 2 - 40, windowWidth / 2 + 40);
    this.posy = random(windowHeight - 50, windowHeight);
    this.taille = random(2, 30);
  }

  this.drawBall = function() {
    fill(255 * this.life / this.maxlife, 255 * this.life / this.maxlife, 255, 200);
    noStroke();
    ellipse(this.posx, this.posy, this.taille*this.life / this.maxlife);
    this.update();
  }
  
  this.update = function() {

    this.posx += this.vx;
    this.posy += this.vy;

    this.vy += gravity;
    this.life--;
this.color255 * this.life / this.maxlife, 255 * this.life / this.maxlife, 255, 200

    if (this.posy > windowHeight || this.life < 0) {
      this.initBall();
    }
  }
}
//***************************************************