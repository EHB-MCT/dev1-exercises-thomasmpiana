"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

rect();
blueRect();
circle();

function rect() {
    context.beginPath();
    context.moveTo(50, 50);
    context.rect(50, 50, 450, 400);
    context.fillStyle = "orange"
    context.strokeStyle = "orange"
    context.fill();
    context.stroke();
}

function circle() {
    context.beginPath();
    context.ellipse(280, 250, 150, 50, 3.17 * .99, 0, Math.PI);
    context.strokeStyle = "yellow"
    context.fillStyle = "yellow"
    context.fill();
    context.stroke();
}

function blueRect() {

    context.beginPath();
    context.moveTo(50, 50);
    context.rect(50, 250, 450, 200);
    context.fillStyle = "blue"
    context.strokeStyle = "blue"
    context.fill();
    context.stroke();
}