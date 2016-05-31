var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var button = document.getElementById("button");

var height = window.innerHeight
var width = window.innerWidth

canvas.width = width
canvas.height = height

var line_count = 0;

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(0, 0);

function lineTo() {
    if (line_count < 100) {
        ctx.lineTo(Math.random() * width, Math.random() * height);
        ctx.stroke();
        line_count ++;
    }
}

setInterval(lineTo, 100);
