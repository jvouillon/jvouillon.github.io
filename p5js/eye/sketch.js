var angle1, angle2;
//****************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  angle1 = 0;
  angle2 = 0;
  stroke(200,160,0);
  background(255);
  fill(0);
  ellipse(windowWidth / 2, windowHeight / 2,230);
}
//****************************************
function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  angle1 += 0.1;
  rotate(angle1++);
  push();
  translate(200, 0);
  angle2 += 4;
  rotate(angle2);
  
  var angle3 = 90+angle2;
  var hyp = sqrt(pow((200+80*cos(angle3)),2)+pow((80*sin(angle3)),2));
  var col = map(hyp,120,280,0,255);
  
  fill(50+col*0.5,col*0.5,col*1.2);
  ellipse(0, 80, 20);
  pop();
  pop();
}
//****************************************