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

var circle_count = 10;
var circles = [];

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

function circle() {
    this.speed = {
        x: -2.5 + Math.random() * 5,
        y: -2.5 + Math.random() * 5
    }

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

    this.accel = {
        x: -1.5 + Math.random() * 3,
        y: -1.5 + Math.random() * 3
    }

    this.radius = 10 + Math.random() * 20

    this.color = randomColor()
    
    this.shrink = Math.random() * 0.25
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(231, 76, 60, 0.1)";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(c.location.x, c.location.y, c.radius, Math.PI * 2, false);
        ctx.fill();

        c.location.x += c.speed.x;
        c.location.y += c.speed.y;

        if (c.location.x > canvas.width - c.radius) {
            c.location.x = canvas.width - c.radius;
            c.speed.x = c.speed.x * -1;
        }

        if (c.location.x < 0 + c.radius) {
            c.location.x = 0 + c.radius;
            c.speed.x = c.speed.x * -1;
        }

        if (c.location.y > canvas.height - c.radius) {
            c.location.y = canvas.height - c.radius;
            c.speed.y = c.speed.y * -1;
        }

        if (c.location.y < 0 + c.radius) {
            c.location.y = 0 + c.radius;
            c.speed.y = c.speed.y * -1;
        }
    }
}

setInterval(draw, 33);

canvas.addEventListener("mousedown", function() {
    for (var i = 0; i < circle_count; i++) {
        circles.push(new circle())
    }
});
