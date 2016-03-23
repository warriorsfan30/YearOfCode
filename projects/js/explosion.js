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

var circle_count = 200;
var circles = [];

for (var i = 0; i < circle_count; i++) {
    circles.push(new circle());
}

function circle() {
    this.speed = {
        x: -2.5 + Math.random() * 5,
        y: -2.5 + Math.random() * 5
    }

    this.location = {
        x: width / 2,
        y: height / 2
    }

    this.accel = {
        x: -1.5 + Math.random() * 3,
        y: -1.5 + Math.random() * 3
    }
    this.radius = 10 + Math.random() * 20
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(c.location.x, c.location.y, c.radius, Math.PI * 2, false);
        ctx.fill();

        c.speed.x += c.accel.x;
        c.speed.y += c.accel.y;

        c.location.x += c.speed.x;
        c.location.y += c.speed.y;
    }
}

canvas.addEventListener("mousedown", function() {
    for (var i = 0; i < 200; i++) {
        circles.push(new circle())
    }
});

setInterval(draw, 33)
