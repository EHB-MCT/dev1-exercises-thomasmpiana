function setRandomcolor() {
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    context.fillStyle = "rgb(" + randomR + "," + randomG + "," + randomB + ")";

}
