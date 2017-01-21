function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var posx = windowWidth/2;
  var posy = windowHeight/2;
  var radius = map(mouseX, 0, windowWidth, 50, 400);
  var innerRadius = map(mouseY, 0, windowHeight, 50, 400);

  var angle = TWO_PI / 10;
  var innerAngle = angle / 2;
  background(255,200,0);

  fill(255, 0, 0);
  stroke(255);
  strokeWeight(3);

  beginShape();

  vertex(posx + radius * cos(0 * angle), posy + radius * sin(0 * angle));
  vertex(posx + innerRadius * cos(0 * angle + innerAngle), posy + innerRadius * sin(0 * angle + innerAngle));

  vertex(posx + radius * cos(1 * angle), posy + radius * sin(1 * angle));
  vertex(posx + innerRadius * cos(1 * angle + innerAngle), posy + innerRadius * sin(1 * angle + innerAngle));

  vertex(posx + radius * cos(2 * angle), posy + radius * sin(2 * angle));
  vertex(posx + innerRadius * cos(2 * angle + innerAngle), posy + innerRadius * sin(2 * angle + innerAngle));

  vertex(posx + radius * cos(3 * angle), posy + radius * sin(3 * angle));
  vertex(posx + innerRadius * cos(3 * angle + innerAngle), posy + innerRadius * sin(3 * angle + innerAngle));

  vertex(posx + radius * cos(4 * angle), posy + radius * sin(4 * angle));
  vertex(posx + innerRadius * cos(4 * angle + innerAngle), posy + innerRadius * sin(4 * angle + innerAngle));

  vertex(posx + radius * cos(5 * angle), posy + radius * sin(5 * angle));
  vertex(posx + innerRadius * cos(5 * angle + innerAngle), posy + innerRadius * sin(5 * angle + innerAngle));

  vertex(posx + radius * cos(6 * angle), posy + radius * sin(6 * angle));
  vertex(posx + innerRadius * cos(6 * angle + innerAngle), posy + innerRadius * sin(6 * angle + innerAngle));

  vertex(posx + radius * cos(7 * angle), posy + radius * sin(7 * angle));
  vertex(posx + innerRadius * cos(7 * angle + innerAngle), posy + innerRadius * sin(7 * angle + innerAngle));

  vertex(posx + radius * cos(8 * angle), posy + radius * sin(8 * angle));
  vertex(posx + innerRadius * cos(8 * angle + innerAngle), posy + innerRadius * sin(8 * angle + innerAngle));

  vertex(posx + radius * cos(9 * angle), posy + radius * sin(9 * angle));
  vertex(posx + innerRadius * cos(9 * angle + innerAngle), posy + innerRadius * sin(9 * angle + innerAngle));

  endShape(CLOSE);
}