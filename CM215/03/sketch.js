var obstacles = []; /*  Array */
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i < 1000; i++) {
    obstacles[i] = new Obstacle("malus");
  }
}

function draw() {
  for (var i=0; i < 1000; i++) {
    obstacles[i].display();
  }
}

function Obstacle(genre) {
  this.type = genre;
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.size = random(20, 50);
  this.couleur = color(random(0, 255), random(0, 255), random(0, 255));

  this.display = function() {
    console.log("Ok");
    fill(this.couleur);
    ellipse(this.x, this.y, this.size, this.size);
  }
}