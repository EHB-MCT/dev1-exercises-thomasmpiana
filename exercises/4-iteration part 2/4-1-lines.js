"use strict"
import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = "2"
    context.fillStyle = "orange"
    context.rect(0, 0, 600, 300);
    context.fill();
    context.stroke();

}