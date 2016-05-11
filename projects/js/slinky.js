var randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
color = randomColor();

var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width;
canvas.height = height;

var CircleX = 75;
var CircleY = 75;

var randomX = -1 + Math.random() * 2 * -2;
var randomY = -1 + Math.random() * 2 * -2;

var draw = function() {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(CircleX, CircleY, 50, 0, 2 * Math.PI);
    ctx.stroke();

    CircleX += randomX;
    CircleY += randomY;

    randomX = -1 + Math.random() * 2 * 2;
    randomY = -1 + Math.random() * 2 * 2;
}

setInterval(draw, 33);
