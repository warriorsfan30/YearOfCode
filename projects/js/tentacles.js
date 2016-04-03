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

var circle_count = 15;
var circles = [];

var generate = function() {
    for (var i = 0; i < circle_count; i++) {
        circles.push(new circle());
    }
}

setInterval(generate, 2000);

function circle() {
    this.speed = {
        x: -1 + Math.random() * 2,
        y: -1 + Math.random() * 2
    }

    this.location = {
        x: width / 2,
        y: height / 2
    }

    this.radius = 5 + Math.random() * 5

    this.color = randomColor()

    this.stroke = "black"

    this.strokeThickness = 0.05
}

var draw = function() {
    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.strokeStyle = c.stroke;
        ctx.lineWidth = c.strokeThickness
        ctx.arc(c.location.x, c.location.y, c.radius, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();

        c.speed.x += -1 + Math.random() * 2;
        c.speed.y += -1 + Math.random() * 2;

        c.location.x += c.speed.x;
        c.location.y += c.speed.y;

        if (c.location.x > canvas.width) {
            c.radius = 0;
        }

        if (c.location.x < 0) {
            c.radius = 0;
        }

        if (c.location.y > canvas.height) {
            c.radius = 0;
        }

        if (c.location.y < 0) {
            c.radius = 0;
        }

    }
}

setInterval(draw, 33);

canvas.addEventListener("mousedown", function() {
    for (var i = 0; i < 15; i++) {
        circles.push(new circle())
    }
});
