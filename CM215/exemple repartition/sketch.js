var obstacles = [];
var maxObstacles = 50; // nombre d'objets dans le tableau
var limite = 5; // distance minimale entre objets
//***************************************************
function setup() {
  ellipseMode(CENTER);
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < maxObstacles; i++) {
    var size = random(15, 35);
    var loopObstacle = true;
    var loopMax = 0;

    while (loopObstacle) {
      // on répète cette boucle tant qu'il y a collision
      // entre un nouvel objet et les objets précédents

      // on crée un nouvel objet...
      var posX = random(size, windowWidth - size);
      var posY = random(size, windowHeight - size);
      loopObstacle = false;

      if (loopMax > 100) {
        // on quitte la boucle while après 100 tentatives.
        // Cela evite un blocage s'il n'y a pas de positionnement possible...
        console.log("break loopMax at: " + i);
        break;
      }
      loopMax++;

      // on teste s'il y a collition avec les objets précédents...
      for (var j = 0; j < i; j++) {
        if (dist(posX, posY, obstacles[j].x, obstacles[j].y) < size / 2 + obstacles[j].size / 2 + limite) {
          loopObstacle = true;
          // si il y a collision, pas la peine de continuer la boucle for
          // mais on poursuit la boucle while avec la création d'un nouveau objet
          break;
        }
      }
    }

    if (loopMax > 100) {
      // on "sort" les objets qui n'ont pas trouvé de place...
      posX = -100;
      posY = -100;
    }
    obstacles[i] = new Obstacle("dummy", size, posX, posY);
  }
}
//***************************************************
function draw() {
  for (var i = 0; i < maxObstacles; i++) {
    obstacles[i].display();
  }
}
//***************************************************
function Obstacle(genre, size, x, y) {
  this.type = genre;
  this.x = x;
  this.y = y;
  this.size = size;
  this.couleur = color(random(0, 255), random(0, 255), random(0, 255));

  this.display = function() {
    fill(this.couleur);
    ellipse(this.x, this.y, this.size, this.size);
  }
}