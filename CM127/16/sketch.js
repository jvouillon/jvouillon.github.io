var imgRef, imgGreen;
var rSlider, gSlider, bSlider;
/*********************************************/
function preload() {
  imgRef = loadImage("landscape.jpg");
  imgGreen = loadImage("green_screen.jpg");
}
/*********************************************/
function setup() {
  createCanvas(imgRef.width, imgRef.height);
  createSliders();
  
  imgGreen.loadPixels();

  background(0);
  image(imgRef, 0, 0, imgRef.width, imgRef.height);
  image(imgGreen, 0, 0, imgGreen.width, imgGreen.height);
}
/*********************************************/
function draw() {
  //if (mouseIsPressed) {
    background(0);
    
    for (var i = 0; i < imgGreen.width * imgGreen.height * 4; i += 4) {
      if(imgGreen.pixels[i+1]>200){
        imgGreen.pixels[i+3] = 0;
      }
    }
    
    imgGreen.updatePixels();
    image(imgRef, 0, 0, imgRef.width, imgRef.height);
    image(imgGreen, 0, 0, imgGreen.width, imgGreen.height);
  //}
}
/*********************************************/
function createSliders(){
  rSlider = createSlider(0, 100, 100);
  rSlider.position(10, 400);
  rSlider.style('width', (imgRef.width - 20) + 'px');

  gSlider = createSlider(0, 100, 100);
  gSlider.position(10, 430);
  gSlider.style('width', (imgRef.width - 20) + 'px');

  bSlider = createSlider(0, 100, 100);
  bSlider.position(10, 460);
  bSlider.style('width', (imgRef.width - 20) + 'px');
}
/*********************************************/