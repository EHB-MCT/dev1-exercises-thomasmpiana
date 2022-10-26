"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawGrid();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 75;
    while (i <= 350) {
        let x = i;
        let y = x;


        Utils.drawLine(75, y, 325, x);
        Utils.drawLine(x, 75, x, 325);


        console.log(i);
        i = i + 50;
    }

}