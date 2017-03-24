var bgcolor;
/*************************************************/
function setup() {
  createCanvas(windowWidth,300);
  bgColor = color(100,100,255);
}
/*************************************************/
function draw() {
  background(bgColor);
  updateText();
}
/*************************************************/
// Fonction déclenchée par un clic sur l'élément
// #btnField dans le code HTML...
//
function newbgColor(){
  bgColor = color(random(0,255),random(0,255),random(0,255));
}
/*************************************************/
// Remplace le contenu HTML de l'élément #btnField
// document fait référence à la page HTML
// cf: DOM ou Document Object Model
//
function updateText(){
  document.getElementById("txtField").innerHTML = "Couleur: " + bgColor;
}
/*************************************************/
function windowResized() {
  resizeCanvas(windowWidth, 300);
}