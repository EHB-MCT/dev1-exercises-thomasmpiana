"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


Rect();
blackRect();
babyRect();

function Rect() {

    context.beginPath();
    context.moveTo(50, 50);
    context.rect(350, 350, 200, 200);
    context.rect(150, 150, 200, 200);
    context.rect(450, 200, 50, 50);
    context.rect(200, 450, 50, 50);


    context.strokeStyle = "red"
    context.stroke();

}

function babyRect() {


    context.beginPath();
    context.moveTo(50, 50);
    context.rect(500, 170, 30, 30);
    context.rect(170, 500, 30, 30);
    context.fillStyle = "black"
    context.fill();
    context.strokeStyle = "black"
    context.stroke();
}


function blackRect() {

    context.beginPath();
    context.moveTo(50, 50);
    context.rect(250, 250, 200, 200);
    context.fillStyle = "black"
    context.fill();
    context.stroke();

}