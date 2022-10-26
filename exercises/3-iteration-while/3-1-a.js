"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawLines();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}


function drawLines() {
    let i = 75;
    while (i <= 350) {
        //This drawLine function does not exist yet!
        //Add it to the utils script:
        //The function draws a line between 2 points
        //And has the following parameters: x1, y1, x2, y2


        Utils.drawLine(75, i, 300, i);


        console.log(i);
        i = i + 25
    }
}