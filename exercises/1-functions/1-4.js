"use strict"


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

square1();
square2();
square3();
square4();
square5();


function square1() {

    context.beginPath();
    context.moveTo(50, 50);
    context.rect(50, 50, 350, 350);
    context.strokeStyle = "black"
    context.lineWidth = 2
    context.fillStyle = "#ADD8E6"
    context.fill();
    context.stroke();

}


function square2() {

    context.beginPath();
    context.moveTo(50, 50);
    context.rect(50, 50, 280, 280);
    context.strokeStyle = "black"
    context.lineWidth = 2
    context.fillStyle = "#ADD8E6"
    context.fill();
    context.stroke();

}


function square3() {

    context.beginPath();
    context.moveTo(50, 50);
    context.rect(110, 50, 220, 220);
    context.strokeStyle = "black"
    context.lineWidth = 2
    context.fillStyle = "#ADD8E6"
    context.fill();
    context.stroke();

}

function square4() {

    context.beginPath();
    context.moveTo(50, 50);
    context.rect(180, 120, 150, 150);
    context.strokeStyle = "black"
    context.lineWidth = 2
    context.fillStyle = "#ADD8E6"
    context.fill();
    context.stroke();

}

function square5() {

    context.beginPath();
    context.moveTo(50, 50);
    context.rect(180, 170, 100, 100);
    context.strokeStyle = "black"
    context.lineWidth = 2
    context.fillStyle = "#ADD8E6"
    context.fill();
    context.stroke();

}
//made by Thomas Mpiana