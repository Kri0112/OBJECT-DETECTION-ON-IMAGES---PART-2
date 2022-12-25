Status = "";
Ball_image = "";
function preload(){
    Ball_image = loadImage("Ball.jpg");
}
function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting Objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    Status = true;
    object_Detector.detect(Ball_image,gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    function draw(){
        image(Ball_image,0,0,640,350);
    }
}