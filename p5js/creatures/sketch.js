var creatures = [];
var gravity;
var bpos, bvelocity;
//*******************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  gravity = createVector(0, 0.1);
  for (var i = 0; i < 20; i++) creatures[i] = new Creature();

  bpos = createVector(windowWidth / 2, windowHeight / 2);
  bvelocity = createVector(0, 0);
}
//*******************************************************
function draw() {
  background(0, 10);
  for (var i = 0; i < creatures.length; i++) creatures[i].update();
}
//*******************************************************
function Creature() {
  this.position = createVector(randomGaussian(mouseX, 100), randomGaussian(mouseY, 100));
  this.velocity = createVector();
  this.acceleration = createVector();

  this.csize = randomGaussian(15, 5);
  this.mass = this.csize;
  this.velocityLimit = map(this.mass,10,30,6,1);
  this.cR = map(this.mass,10,20,255,0);
  this.cG = 0; //map(this.mass,10,10,255,0);
  this.cB = map(this.mass,10,20,0,150);

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    var direction = p5.Vector.sub(mouse, this.position);
    direction.normalize();
    direction.mult(randomGaussian(0.9,0.5));
    this.acceleration = direction;
    //this.acceleration.add(gravity);
    this.acceleration.div(this.mass);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.velocityLimit);
    this.position.add(this.velocity); 

    noStroke();
  	fill(this.cR,this.cG,this.cB);
    ellipse(this.position.x, this.position.y, this.csize);
  }
}