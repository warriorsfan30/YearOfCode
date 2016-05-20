var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width;
canvas.height = height;

var lineTo1 = 0;
var moveTo1 = 0;

var lineTo2 = 0;
var moveTo2 = height;

var lineToInterval = width / 100;
var moveToInterval = height / 100;

var draw = function() {
    ctx.beginPath();
    ctx.moveTo(0, moveTo1);
    ctx.lineTo(lineTo1, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width, moveTo1);
    ctx.lineTo(lineTo1, 0);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.moveTo(0, moveTo2);
    ctx.lineTo(lineTo2, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width, moveTo2);
    ctx.lineTo(lineTo2, height);
    ctx.stroke();

    moveTo1 += moveToInterval;
    lineTo1 += lineToInterval;

    moveTo2 -= moveToInterval;
    lineTo2 += lineToInterval;
}

setInterval(draw, 50);
