"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


box();
stroke();

function box() {
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.lineTo(150, 150);
    context.lineTo(50, 150);
    context.lineTo(50, 50);
    context.lineWidth = 2
    context.stroke();
}

function stroke() {
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 150);
    context.moveTo(150, 50);
    context.lineTo(50, 150);
    context.lineWidth = 1
    context.strokeStyle = "red"
    context.stroke();




}