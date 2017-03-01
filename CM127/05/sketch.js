// Sujet: Création de fonction paramétrées
//
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255, 0, 0);
  strokeWeight(3);
}

function draw() {
  background(255);
  var taille = map(mouseX, 0, windowWidth, 50, 500);

  for (j = 0; j < windowHeight; j += taille) {
    for (i = 0; i < windowWidth; i += taille) {
      etoile(i, j, 10, taille / 2, taille / 3);
    }
  }
}

function etoile(posx, posy, segments, rayon1, rayon2) {
  var angle = TWO_PI / segments;
  beginShape();
  for (var i = 0; i < segments; i++) {
    vertex(posx + rayon1 * cos(i * angle), posy + rayon1 * sin(i * angle));
    vertex(posx + rayon2 * cos(i * angle + angle / 2), posy + rayon2 * sin(i * angle + angle / 2));
  }
  endShape(CLOSE);
}