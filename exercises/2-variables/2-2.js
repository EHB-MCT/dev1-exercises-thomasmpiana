let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


setRandomcolor();

squareOne(50, 50, 500, 500);

squareOne(100, 100, 400, 400);

squareOne(150, 150, 300, 300);

squareOne(200, 200, 200, 200);

squareOne(250, 250, 100, 100);

squareOne(285, 285, 25, 25);


function setRandomcolor() {
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    context.fillStyle = "rgb(" + randomR + "," + randomG + "," + randomB + ")";

}


function squareOne(x, y, width, height) {
    context.lineWidth = (2);
    context.beginPath();
    context.rect(x, y, width, height);
    setRandomcolor();
    context.fill();
    context.stroke();

}