var randomPosX = function() {
    return Math.floor(Math.random() * width * 0.975);
};

var randomPosY = function() {
    return Math.floor(Math.random() * height * 0.975);
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var button = document.getElementById("button");

var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width;
canvas.height = height;

var mouse = {};

canvas.addEventListener('mousedown', mousePos, false);
canvas.addEventListener('touch', mousePos, false);

function mousePos(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

var xPos = randomPosX();
var yPos = randomPosY();

var rectWidth = 10;
var rectHeight = 10;

function draw() {
    ctx.restore();
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = "#3498db";
    ctx.fill();
    ctx.closePath();

    ctx.font = "35px Quicksand";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    ctx.fillText("Try and Click the White Square", width / 2, height / 2);
    ctx.save();
}

function drawSquare() {
    rectWidth -= 1;
    rectHeight -= 1;
    
    ctx.strokeStyle = "white";
    ctx.rect(xPos, yPos, rectWidth, rectHeight);
    ctx.stroke();
}

draw();
drawSquare();

canvas.addEventListener("mousedown", function(e) {

    if (mouse.x > xPos && mouse.x < xPos + rectWidth && mouse.y > yPos && mouse.y < yPos + rectHeight) {
        xPos = randomPosX();
        yPos = randomPosY();

        draw();
        drawSquare();

        if (rectWidth == 1 && rectHeight == 1) {
            alert("You won! Congratulations!");
        }

    }

});
