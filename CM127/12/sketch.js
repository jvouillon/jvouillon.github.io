// Sujet: importation de medias + transformations...
//
var balls = [];
var maxBalls;
var gravity;
var score, timer;

//***************************************************
var img;

function preload() {
  img = loadImage('assets/leaf.png');
}
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  maxBalls = 150;
  gravity = 0.1;
  timer = 0;

  for (var i = 0; i < maxBalls; i++) {
    balls[i] = new Ball();
    balls[i].init();
  }
  imageMode(CENTER);
  angleMode(DEGREES);
}
//***************************************************
function draw() {
  background(0);

  for (var i = 0; i < maxBalls; i++) {
    balls[i].drawBall();
  }

  timer++;
  afficheTexte();
}
//***************************************************
function afficheTexte() {
  textSize(10);
  noStroke();
  fill(255);
  text("Particules: " + maxBalls, 10, 20);
  text("Time: " + floor(timer / 60) + " sec", 10, 35);
}
//***************************************************
function Ball() {
  this.init = function() {
    this.life = random(50, 200);
    this.lifeMax = this.life;
    this.couleur = color(255, 255, 255);
    var dx = map(mouseX,0,windowWidth,20,windowWidth/2);
    this.posx = random(windowWidth / 2 - dx, windowWidth / 2 + dx);
    this.posy = windowHeight;
    this.vx = random(-1, 1);
    this.vy = random(map(mouseY,0,windowHeight,-13,-4), -3);
    this.taille = random(20, 50);
    this.angle = random(0, 360);
    this.vangle = random(-5, 5);
  }
  this.drawBall = function() {
    push();
    translate(this.posx, this.posy);
    rotate(this.angle);
    image(img, 0, 0, this.taille, this.taille * 0.86);
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
    
  }
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//***************************************************