var particles = [];
var gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0 ; i<10;i++)particles[i] = new Particle();
  
  gravity = createVector(0,0.05);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  background(0);
}
//*********************************************************************
function draw() {
  for(var i = 0 ; i<particles.length;i++) particles[i].update();
}
//*********************************************************************
function Particle(){
  
  this.update = function(){ 
    this.updateColor();
    this.updatePosition();
    ellipse(this.epos.x,this.epos.y,this.esize);
    this.drawMotif();
    if(this.elife--<=0)this.init();
  }
  
  this.updateColor = function(){
    noStroke();
    fill(this.cR,this.cG,this.cB,200);
    this.cR += this.iR;
    this.cG += this.iG;
    this.cB += this.iB;
  }
  this.updatePosition = function(){
    this.espeed.rotate(this.curvature*(noise(this.perlinx,this.perliny)-0.5));
    //this.espeed.add(gravity);
    this.epos.add(this.espeed);
    this.perlinx += 0.01;
  }
  this.drawMotif = function(){
    noFill();
    stroke(this.cR,this.cG,this.cB,200);
    push();
    translate(this.epos.x,this.epos.y);
    rotate(this.motifAngle);
    line(0,0,randomGaussian(0,1),randomGaussian(25,10));
    pop();
    this.motifAngle += randomGaussian(20,20);
  }
  
  this.init = function(){
    this.epos = createVector(randomGaussian(windowWidth/2,20),randomGaussian(windowHeight/2,20));
  	this.esize = randomGaussian(3,1);
  	this.espeed = p5.Vector.random2D();
    this.espeed.mult(randomGaussian(3,2));
  	
    this.elife = randomGaussian(1000,200);
    this.elifeMax = this.elife;
    
    this.cR = randomGaussian(100,50);
    this.cG = randomGaussian(200,50);
    this.cB = randomGaussian(20,5);;
    
    this.iR = - this.cR / this.elifeMax;
    this.iG = - this.cG / this.elifeMax;
    this.iB = 0;
    
    this.curvature =  random(0.1,2);
    this.perlinx = random(0,100);
    this.perliny = random(0,100);
    
    this.motifAngle = 0;
  }
  this.init();
}