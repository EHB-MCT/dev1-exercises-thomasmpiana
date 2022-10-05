"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {

    context.beginPath();
    context.moveTo(200, 200);
    context.lineTo(200, 350);
    context.lineWidth = 3
    context.strokeStyle = "blue"
    context.stroke();

    context.beginPath();
    context.moveTo(300, 200);
    context.lineTo(100, 200);
    context.lineWidth = 4
    context.strokeStyle = "red"
    context.stroke();

    context.beginPath();
    context.moveTo(400, 200);
    context.lineTo(400, 350);
    context.lineWidth = 3.5
    context.strokeStyle = "yellow"
    context.stroke();

    context.beginPath();
    context.moveTo(500, 200);
    context.lineTo(500, 350);
    context.lineWidth = 3
    context.strokeStyle = "green"
    context.stroke();

    context.beginPath();
    context.moveTo(600, 200);
    context.lineTo(600, 350);
    context.lineTo(700, 350);
    context.lineTo(700, 200);
    context.lineTo(600, 200);
    context.lineWidth = 3
    context.strokeStyle = "purple"
    context.stroke();

    context.beginPath();
    context.moveTo(800, 200);
    context.lineTo(800, 350);
    context.moveTo(800, 200);
    context.lineTo(850, 300);
    context.moveTo(850, 300);
    context.lineTo(900, 200);
    context.moveTo(900, 200);
    context.lineTo(900, 350);
    context.lineWidth = 4
    context.strokeStyle = "pink"
    context.stroke();


    context.beginPath();
    context.moveTo(1000, 200);
    context.lineTo(950, 350);
    context.moveTo(1000, 200);
    context.lineTo(1050, 350);
    context.lineWidth = 3
    context.strokeStyle = "orange"
    context.stroke();

    context.beginPath();
    context.moveTo(1100, 200);
    context.lineTo(1200, 200);
    context.moveTo(1100, 200);
    context.lineTo(1100, 260);
    context.moveTo(1100, 260);
    context.lineTo(1200, 260);
    context.moveTo(1200, 260);
    context.lineTo(1200, 350);
    context.moveTo(1200, 350);
    context.lineTo(1100, 350);
    context.lineWidth = 2
    context.strokeStyle = "red"
    context.stroke();







}