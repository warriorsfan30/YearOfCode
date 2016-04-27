var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var button = document.getElementById("button");

var height = window.innerHeight
var width = window.innerWidth

canvas.width = width
canvas.height = height

var mouse = {};

var lastPosX = 0;
var lastPosY = 0;

ctx.font = "35px Quicksand";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Click to Draw Lines!", width / 2, height / 2);

var generate = function() {
    for (var i = 0; i < circle_count; i++) {
        circles.push(new circle());
    }
}

setInterval(generate, 7500);

canvas.addEventListener('mousedown', mousePos, false);
canvas.addEventListener('touch', mousePos, false);

function mousePos(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

canvas.addEventListener("mousedown", function() {
    if (lastPosX !== 0 && lastPosY !== 0) {
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(lastPosX, lastPosY);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    }

    lastPosX = mouse.x;
    lastPosY = mouse.y;
});

button.addEventListener("mousedown", function() {
    ctx.clearRect(0, 0, width, height);
    ctx.font = "35px Quicksand";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Click to Draw Lines!", width / 2, height / 2);
    
    lastPosX = 0;
    lastPosY = 0;
});
