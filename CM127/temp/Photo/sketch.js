var imgLoaded;
document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  imgLoaded = "";
}

function draw() {
 background(200); 
 //if (picURL){
 //image(img, 0, 0);
 if(picURL && !imgLoaded){
  loadImage(picURL, function(img){imgLoaded=img;});
  console.log("load image...");
 }
 
 if(imgLoaded){
   image(imgLoaded,mouseX,mouseY,100,100);
 }
 
 //}
}