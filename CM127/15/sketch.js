var imgRef, imgTemp;
var rSlider, gSlider, bSlider;
/*********************************************/
function preload() {
  imgRef = loadImage("landscape.jpg");
}
/*********************************************/
function setup() {
  createCanvas(imgRef.width, imgRef.height);
  //
  // creation des sliders:
  // A noter que les sliders sont des éléments HTML
  // et ne font pas partie du canvas
  //
  rSlider = createSlider(0, 100, 100);
  rSlider.position(10, 400);
  rSlider.style('width', (imgRef.width - 20) + 'px');

  gSlider = createSlider(0, 100, 100);
  gSlider.position(10, 430);
  gSlider.style('width', (imgRef.width - 20) + 'px');

  bSlider = createSlider(0, 100, 100);
  bSlider.position(10, 460);
  bSlider.style('width', (imgRef.width - 20) + 'px');
  //
  // la fonction loadPixels charge les informations RGBA
  // de chaque pixel de l'image imgRef dans un buffer 'Pixels'
  //
  imgRef.loadPixels();
  //
  // imgTemp est une image vide, qui va permettre de créer un buffer
  // de pixels dans lequel on va pouvoir recopier et modifier
  // les valeurs des pixels de l'image imgRef
  //
  imgTemp = createImage(imgRef.width, imgRef.height);
  imgTemp.loadPixels();

  background(0);
  image(imgRef, 0, 0, imgRef.width, imgRef.height);
}
/*********************************************/
function draw() {
  //
  // on rajoute la condition mouseIsPressed
  // afin que le traitement ne se fasse que si on
  // modifie les sliders...
  //
  if (mouseIsPressed) {
    background(0);
    for (var i = 0; i < imgRef.width * imgRef.height * 4; i += 4) {
      imgTemp.pixels[i + 0] = imgRef.pixels[i + 0] * rSlider.value() / 100;
      imgTemp.pixels[i + 1] = imgRef.pixels[i + 1] * gSlider.value() / 100;
      imgTemp.pixels[i + 2] = imgRef.pixels[i + 2] * bSlider.value() / 100;
      imgTemp.pixels[i + 3] = 255;
    }
    imgTemp.updatePixels();
    image(imgTemp, 0, 0, imgRef.width, imgRef.height);
  }
}
/*********************************************/