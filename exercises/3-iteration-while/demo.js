let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let height = innerHeight;
let width = innerWidth;

let i = 0;

while (i < 5) {
    console.log(i);
    context.beginPath();
    context.ellipse(i * 350, 200, 150, 150, 0, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    i++

}