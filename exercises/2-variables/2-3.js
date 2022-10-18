"use strict"
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let height = innerHeight;
let width = innerWidth;

draw();
redblock();

function draw() {

    context.beginPath();
    context.fillStyle = "darkblue"
    context.fillRect(width / 3, width / 12, height / 6, width / 4);
    context.fillRect(width / 12, width / 12, height / 6, width / 4);
    context.stroke();
    context.fill();

    context.beginPath();
    context.fillStyle = "red"
    context.fillRect(width / 12.7, width / 7.5, width / 3, height / 5.2);


    context.stroke();
    context.fill();

    context.beginPath();
    context.fillStyle = "brown"
    context.fillRect(width / 12, width / 3.1, width / 12.5, height / 6);
    context.fillRect(width / 3, width / 3.1, width / 12.5, height / 6);

    context.stroke();
    context.fill();

}