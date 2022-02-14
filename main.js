lower_nose_x = 0;
lower_nose_y = 0;

function preload() {
    moustache = loadImage("https://i.postimg.cc/Jn2fZ4DF/moustache-removebg-preview.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    canvas.background("white");
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);

    image(moustache, lower_nose_x - 15, lower_nose_y + 10, 30, 30);

}
function modelLoaded() {
    console.log("mdel is initialized");
}
function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results)
        lower_nose_x = results[0].pose.nose.x;
        lower_nose_y = results[0].pose.nose.y;
        console.log("nose_x = " + lower_nose_x);
        console.log("nose_y = " + lower_nose_y);
    }
}