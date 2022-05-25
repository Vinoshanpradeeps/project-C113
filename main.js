function preload() {

}
function setup() {
    canvas = createCanvas(1200, 480);
    canvas.position(115, 150);
    video = createCapture(VIDEO);
    video.size(400, 100, 400, 300);
    video.hide();
}

function draw() {
    image(video, 400, 100, 400, 300);

    fill(255, 0, 0);
    stroke(255, 255, 255);
    circle(400, 100, 70);
    fill(255, 0, 0);
    stroke(255, 255, 255);
    circle(800, 100, 70);
    fill(255, 0, 0);
    stroke(255, 255, 255);
    circle(400, 390, 70);
    fill(255, 0, 0);
    stroke(255, 255, 255);
    circle(800, 390, 70);

    fill(255, 255, 255);
    stroke(255, 0, 0);
    rect(435, 90, 330, 20);
    fill(255, 255, 255);
    stroke(255, 0, 0);
    rect(435, 385, 330, 20);
    fill(255, 255, 255);
    stroke(255, 0, 0);
    rect(390, 135, 20, 220);
    fill(255, 255, 255);
    stroke(255, 0, 0);
    rect(795, 135, 20, 220);
}
function take_snapshot(){
    save('image.png');
}