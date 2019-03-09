var points = [];
var centres = [];
var maxPoints = 80;
var maxCentres = 2;
var x, y;
var pointStartAngle = 0;
var centerStartAngle = 0;

function setup() {
  x = windowWidth / 2;
  y = windowHeight / 2;

  angleMode(DEGREES);

  createPoints(pointStartAngle);
  createCenters(centerStartAngle);
  
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(20, 50, 150);
}
/***********************************************************/
function draw() {
background(255,150,0);
  beginShape();
  for (var i = 0; i < maxPoints; i += maxCentres) {
    for (var j = 0; j < maxCentres; j++) {
      vertex(centres[j].x, centres[j].y);
      vertex(points[i + j].x, points[i + j].y);
    }
  }
  endShape();

  pointStartAngle += 0.2;
  centerStartAngle -= 0.5;
  createPoints(pointStartAngle);
  createCenters(centerStartAngle);
  //noLoop();
}

/***********************************************************/
function createPoints(startAngle) {
  var rX = windowWidth/2;
  var rY = windowHeight/2;
  var angle = 360 / maxPoints;

  for (var i = 0; i < maxPoints + maxCentres; i++) {
    points[i] = new Object;
    points[i].x = x + rX * cos(i * angle + startAngle);
    points[i].y = y + rY * sin(i * angle + startAngle);
  }
}
/***********************************************************/
function createCenters(startAngle) {
  var rX = windowHeight/8;
  var rY = windowHeight/2;
  var angle = 360 / maxCentres

  for (i = 0; i < maxCentres; i++) {
    centres[i] = new Object;
    centres[i].x = x + rX * cos(i * angle + startAngle);
    centres[i].y = y + rY * sin(i * angle + startAngle);
  }
}
/***********************************************************/