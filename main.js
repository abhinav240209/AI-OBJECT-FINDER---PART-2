function preload() {

}

function setup() {
    canvas=createCanvas(400,300);
    canvas.position(500,300);
    video=createCapture(VIDEO);
    video.hide();
    detector=ml5.objectDetector('cocossd', modelLoaded);
    
}
 function draw() {
  image(video,0,0,400,300);
  
 }
 function modelLoaded() {
     console.log("model is loaded");
     document.getElementById("status").innerHTML="Status: Objects are being detected";
     
 }