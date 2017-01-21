// Déclarer les variables posx et posy à l'extérieur des fonctions
// pour qu'elles aient une portée globale et
// qu'elles puissent être utilisées dans toutes les fonctions de l'application
var posx, posy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // les variables ayant été déclarées
  // il faut leur donner une valeur initiale:
  // c'est l'initialisation.
  posx = 0;
  posy = 100;
  // ces 2 fonctions, n'ont pas besoin d'être répétées
  // à chaque itération de la fonction draw()
  // on les mets donc dans le setup()
  strokeWeight(6);
  fill(255, 0, 0);
}

function draw() {
  background(255);

  posx += 1; // à chaque itération, la variable posx est incémentée de 0.5

  beginShape();
  vertex(0 + posx, 100 + posy);
  vertex(50 + posx, 50 + posy);
  vertex(100 + posx, 100 + posy);
  vertex(50 + posx, 150 + posy);
  endShape(CLOSE);
}