var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width;
canvas.height = height;

var lineTo = 0;
var moveTo = 0;

var lineToInterval = width/100;
var moveToInterval = height/100;

var draw = function() {
    ctx.beginPath();
    ctx.moveTo(0, moveTo);
    ctx.lineTo(lineTo, height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(width, moveTo);
    ctx.lineTo(lineTo, 0);
    ctx.stroke();

    moveTo += moveToInterval;
    lineTo += lineToInterval;
}
setInterval(draw, 50);
