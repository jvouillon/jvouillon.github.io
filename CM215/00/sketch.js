 function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 fill(255,0,0);
}

function draw()
{}

function touchStarted() {
 background(255);
 rect(touches[0].x,touches[0].y,150,150);
}