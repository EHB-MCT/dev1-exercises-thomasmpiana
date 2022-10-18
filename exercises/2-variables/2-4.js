"use strict"
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let height = innerHeight;
let width = innerWidth;
let outwidth = outerWidth;

//context.arc(280, 250, 100, 3.15, 0);



fullWindow();
circle();



function fullWindow() {
    context.beginPath();
    context.rect(window.innerWidth / 5000, window.innerHeight / 500, width / 1, height / 4);
    context.fillStyle = "orange"
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(window.innerWidth / 5000, window.innerHeight / 4, width / 1, height / 4);
    context.fillStyle = "darkorange"
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(window.innerWidth / 5000, window.innerHeight / 2, width / 1, height / 4);
    context.fillStyle = "brown"
    context.fill();
    context.stroke();

    context.beginPath();
    context.strokeStyle = "darkblue"
    context.rect(window.innerWidth / 5000, window.innerHeight / 1.33, width / 1, height / 4);
    context.fillStyle = "darkblue"
    context.fill();
    context.stroke();
}

function circle() {

    context.beginPath();
    context.fillStyle = "yellow"
    context.strokeStyle = "yellow"
    context.arc(width / 2, height / 1.33, width / 6, 3.15, 0);
    context.fill();
    context.stroke();
}