var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var colors = ['#024a59','#04a65b','#04bf56','#f2cc5d','#f3574a']

var height = window.innerHeight
var width = window.innerWidth

canvas.width = width
canvas.height = height

var mouse = {};

var circle_count = 25;
var circles = [];

var generate = function() {
    for (var i = 0; i < circle_count; i++) {
        circles.push(new circle());
    }
}

setInterval(generate, 10000);

canvas.addEventListener('mousedown', mousePos, false);
canvas.addEventListener('mousemove', mousePos, false);

function mousePos(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

function circle(x, y) {
    this.speed = {
        x: -2.5 + Math.random() * 5,
        y: -2.5 + Math.random() * 5
    }

    if (mouse.x && mouse.y) {
        this.location = {
            x: x,
            y: y
        };
    } else {
        this.location = {
            x: W / 2,
            y: H / 2
        };
    }

    this.accel = {
        x: -1.5 + Math.random() * 3,
        y: -1.5 + Math.random() * 3
    }
    
    this.dim = 10 + Math.random() * 20
    
    this.color = Math.floor(Math.random() * 5);
}

canvas.addEventListener("mousemove", function() {
    for (var i = 0; i < 200; i++) {
        circles.push(new circle(mouse.x, mouse.y))
    }
});

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.fillStyle = colors[c.color];
        ctx.rect(c.location.x, c.location.y, c.dim, c.dim);
        ctx.fill();

        c.speed.x += c.accel.x;
        c.speed.y += c.accel.y;

        c.location.x += c.speed.x;
        c.location.y += c.speed.y;
    }
}

setInterval(draw, 33);
