var randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

color = randomColor();

var height = window.innerHeight
var width = window.innerWidth

canvas.width = width
canvas.height = height

var circleX = width/2;
var circleY = height/2;


var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";
    
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(circleX, circleY, 10, 0, 2 * Math.PI);
    ctx.fill();
    circleX += -10 + Math.random() * 20;
    circleY += -10 + Math.random() * 20;
}

setInterval(draw, 33);
