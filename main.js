nosex = 0;
nosey = 0;
function preload() {
Moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
canvas = createCanvas(350,350);
canvas.center();
video = createCapture(VIDEO);
video.size(350,350);
video.hide();
poseNet = ml5.poseNet(video, ModelLoaded);
poseNet.on('pose', gotPoses);
}
function ModelLoaded(){
    console.log("poseNet is now initialized");
    
}
function draw(){
image(video,0,0,350,350);
fill('#39FF14');
stroke('#0A0A08');
image(Moustache, nosex, nosey, 30, 30);
}
function TS(){
    save('LePhotoFiltrée.jpeg');
    
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y - 0.5;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log('nose y = ' + results[0].pose.nose.y);
    }
}
