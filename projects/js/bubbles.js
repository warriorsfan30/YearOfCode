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

var circle_count = 1000;
var circles = [];

var generate = function() {
    for (var i = 0; i < circle_count; i++) {
        circles.push(new circle());
    }
}

setInterval(generate, 2000);

function circle() {
    this.speed = {
        x: 0.5 + Math.random() * 3,
        y: 0.5 + Math.random() * 3
    }

    this.location = {
        x: 0 + Math.random() * width,
        y: height + 150
    }

    this.accel = {
        x: -0.125 + Math.random() * 0.25,
        y: -0.125 + Math.random() * 0.25
    }
    this.radius = 5 + Math.random() * 20
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arc(c.location.x, c.location.y, c.radius, Math.PI * 2, false);
        ctx.stroke();

        c.speed.x += c.accel.x;
        c.speed.y += c.accel.y;

        c.location.x += c.speed.x;
        c.location.y += c.speed.y;
    }
}

setInterval(draw, 33);

canvas.addEventListener("mousedown", function() {
    for (var i = 0; i < 200; i++) {
        circles.push(new circle())
    }
});
