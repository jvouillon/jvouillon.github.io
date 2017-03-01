// Sujet: initiation aux systèmes de particules...
//
var balls = [];
var maxBalls;
var gravity;
var score, timer;
var obsx, obsy, obsSize; // position de l'obstacle...
//***************************************************
var leaves = [];

function preload() { // preload() runs once
  leaves[0] = loadImage('assets/leaf_01.png');
  leaves[1] = loadImage('assets/leaf_02.png');
}
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  maxBalls = 100;
  gravity = 0.1;
  timer = 0;
  obsSize = 70;
  imageMode(CENTER);

  for (var i = 0; i < maxBalls; i++) {
    balls[i] = new Ball();
    balls[i].init();
  }
}
//***************************************************
function draw() {
  background(0);

  for (var i = 0; i < maxBalls; i++) {
    balls[i].drawBall();
  }

  timer++;
  afficheTexte();
  afficheObstacle();
}
//***************************************************
function afficheTexte() {
  textSize(10);
  fill(255);
  text("Particules: " + maxBalls, 10, 20);
  text("Time: " + floor(timer / 60) + " sec", 10, 35);
}
//***************************************************
function afficheObstacle() {
  obsx = mouseX;
  obsy = mouseY;
  fill(0);
  strokeWeight(5);
  stroke(150);
  ellipse(obsx, obsy, obsSize);
}
//***************************************************
function Ball() {
  this.init = function() {
    this.life = random(50, 200);
    this.lifeMax = this.life;
    this.couleur = color(255, 255, 255);
    this.posx = random(windowWidth / 2 - 15, windowWidth / 2 + 15);
    this.posy = windowHeight;
    this.vx = random(-1, 1);
    this.vy = random(-10, -3);
    this.taille = random(20, 50);
    this.angle = random(0, PI);
    this.vangle = random(-0.12, 0.12);
    this.img = leaves[floor(random(0,2))];
  }
  this.drawBall = function() {
    noStroke();
    //strokeWeight(1);
    //stroke(0);
    fill(this.couleur);
    //ellipse(this.posx, this.posy, this.taille);
    push();
    translate(this.posx, this.posy);
    rotate(this.angle);
    image(this.img, 0, 0, this.taille, this.taille * 0.86);
    //rect(0, 0, this.taille, this.taille);
    pop();
    this.update();
  }
  this.update = function() {
    if (this.posy > windowHeight || this.life < 0) {
      this.init();
    }
    this.posx += this.vx;
    this.posy += this.vy;
    this.vy += gravity;
    //this.life--;
    this.angle += this.vangle;
    // les composantes couleurs Verte et Bleue changent avec la vie de la particule
    var cgreen = map(this.life, this.lifeMax, 0, 255, 0);
    var cblue = map(this.life, this.lifeMax, 0, 150, 0);
    var calpha = map(this.life, this.lifeMax, 0, 255, 100);
    this.couleur = color(255, cgreen, cblue, calpha);
    // test de collision avec l'obstacle mobile...
    if (dist(this.posx, this.posy, obsx, obsy) < this.taille / 2 + obsSize / 2) {
      this.vy = -this.vy;
    }
  }
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//***************************************************