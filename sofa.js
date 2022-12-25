Status = "";
Sofa_image = "";
function preload(){
    Sofa_image = loadImage("Sofa.jpg");
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
    object_Detector.detect(Sofa_image,gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    function draw(){
        image(Sofa_image,0,0,640,350);
    }
}