
// Position Variables
var x = 0;
var y = 0;
 
// Speed - Velocity
var vx = 0;
var vy = 0;
 
// Acceleration
var ax = 0;
var ay = 0;
 
var vMultiplier = 1; //0.007;
var bMultiplier = 0.6;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = windowWidth / 2;
    y = windowHeight / 2;
    fill(0);
}

function draw() {
    background(255);
    textSize(50);
    text("Rx: " + round(rotationX), 20,20);
    text("Ry: " + round(rotationY), 20,80);
    text("Rz: " + round(rotationZ), 20,140);
    
    ballMove();
    ellipse(x, y, 60, 60);
}

function ballMove() {


	vx = vx + rotationX;
	vy = vy + rotationY
	
	y = y + vy * vMultiplier; 
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the canvas
	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * bMultiplier; 
 	}
 	if (x > width - 20) { 
 		x = width - 20; 
 		vx = -vx * bMultiplier; 
 	}
 	if (y > height - 20) { 
 		y = height - 20; 
 		vy = -vy * bMultiplier; 
 	}
	
}

