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

var mouse = {};

var scatter = false;

var circle_count = 1;
var circles = [];

var generate = function() {
    for (var i = 0; i < circle_count; i++) {
        circles.push(new circle());
    }
}

setInterval(generate, 1000);

canvas.addEventListener('mousedown', mousePos, false);
canvas.addEventListener('touch', mousePos, false);

function mousePos(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

function circle() {
    if (mouse.x && mouse.y) {
        this.location = {
            x: mouse.x,
            y: mouse.y
        };
    } else {
        this.location = {
            x: width / 2,
            y: height / 2
        };
    }
    
    this.radius = 2.5 + Math.random() * 2.5
    
    this.hue = 255
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    
    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.strokeStyle = "rgb(" + c.hue + "," + c.hue + "," + c.hue +  ")";
        ctx.arc(c.location.x, c.location.y, c.radius, 0, 2 * Math.PI);
        ctx.stroke();

        c.radius += 2;
        c.hue --;
    }
}

setInterval(draw, 33);
