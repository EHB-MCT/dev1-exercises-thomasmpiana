"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

console.log("Drawlines")

Drawlines();

function Drawlines() {
    context.beginPath();
    let margin = context.canvas.height;
    let width = context.canvas.width;

    context.beginPath();
    context.lineWidth = (3);
    context.moveTo(100, 100);
    context.lineTo(width - margin, 100);
    context.lineTo(100, 200);
    context.lineTo(width - margin, 200);
    context.lineTo(100, 300);
    context.lineTo(width - margin, 350);
    context.lineTo(100, 400);
    context.lineTo(width - margin, 450);
    context.lineTo(100, 500);
    context.lineTo(width - margin, 500);
    context.lineTo(100, 100);
    context.stroke();

}