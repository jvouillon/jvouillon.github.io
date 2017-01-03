/* **************************************************

Ce code montre, quand il y a collision entre 2 objets,
comment repositionner l'un d'entre eux, afin qu'ils
soient en contact et ne s'interceptent plus.

Les objets étant positionnés de manière aléatoire,
il faut recharger la page pour avoir une nouvelle
configuration.

L'objet repositionné, s'affiche en vert.

************************************************** */
var obstacles = []; /*  Array */
var limite = 1;

function setup() {
  ellipseMode(CENTER);
  createCanvas(windowWidth, windowHeight);

  var radius = 80;
  obstacles[0] = new Obstacle("dummy", radius, random(windowWidth/2 - radius*2, windowWidth/2 + radius*2), random(windowHeight/2 - radius*2, windowHeight/2 + radius*2));
  obstacles[1] = new Obstacle("dummy", radius, random(windowWidth/2 - radius*2, windowWidth/2 + radius*2), random(windowHeight/2 - radius*2, windowHeight/2 + radius*2));

  noLoop(); // la fonction draw ne boucle pas...
}
//***************************************************
function draw() {
  background(255);

  obstacles[0].display();
  obstacles[1].display();

  var distance_courante = dist(obstacles[0].x, obstacles[0].y, obstacles[1].x, obstacles[1].y);
  var distance_contact = obstacles[0].radius + obstacles[1].radius;

  if (distance_courante < distance_contact) {
    // application du théorème de Pythagore... ;-)
    var intersection = distance_contact - distance_courante;
    var delta = intersection / distance_courante;
    var dX = (obstacles[0].x - obstacles[1].x) * delta * limite;
    var dY = (obstacles[0].y - obstacles[1].y) * delta * limite;
    
    // on décale l'obstacle, pour le mettre en contact
    obstacles[1].x -= dX;
    obstacles[1].y -= dY;

    obstacles[1].couleur = color(0, 250, 0, 150);
    obstacles[1].display();
  }

  line(obstacles[0].x, obstacles[0].y, obstacles[1].x, obstacles[1].y);
}
//***************************************************
function Obstacle(genre, radius, x, y) {
  this.type = genre;
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.couleur = color(150, 150, 150, 150);

  this.display = function() {
    fill(this.couleur);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}
//***************************************************