function preload(){

}
function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    face_cam = createCapture(VIDEO);
    face_cam.hide();
}
function draw(){
    image(face_cam, 100, 100, 400, 400);
    
    stroke(155, 70, 120);
    fill(15, 175, 190);
    rect(100, 80, 400, 20)

    stroke(155, 70, 120);
    fill(15, 175, 190);
    rect(100, 500, 400, 20)

    stroke(155, 70, 120);
    fill(15, 175, 190);
    rect(500, 100, 20, 400)

    stroke(155, 70, 120);
    fill(15, 175, 190);
    rect(80, 100, 20, 400)
   
    stroke(155, 70, 120);
    fill(200, 75, 90);
    circle(100, 100, 60);
    
    stroke(155, 70, 120);
    fill(200, 75, 90);
    circle(500, 100, 60);

    stroke(155, 70, 120);
    fill(200, 75, 90);
    circle(100, 500, 60);

    stroke(155, 70, 120);
    fill(200, 75, 90);
    circle(500, 500, 60);

    stroke(155, 70, 120);
    fill(15, 175, 19);
    triangle(200, 100, 400, 100, 300, 50);

    stroke(155, 70, 120);
    fill(15, 175, 19);
    triangle(200, 500, 400, 500, 300, 550);

    stroke(155, 70, 120);
    fill(15, 175, 19);
    triangle(500, 200, 500, 400, 550, 300);

    stroke(155, 70, 120);
    fill(15, 175, 19);
    triangle(100, 200, 100, 400, 50, 300);

}