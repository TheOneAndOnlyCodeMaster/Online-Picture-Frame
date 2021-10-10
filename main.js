
function setup(){
    canvas= createCanvas(600, 600);
    canvas.position(150, 200)
    face_cam = createCapture(VIDEO);
    face_cam.hide();
}
function draw(){
    image(face_cam, 150, 200, 200, 200);
    stroke(155, 175, 190);
    circle(25, 25, 10);
}