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

setInterval(generate, 10000);

canvas.addEventListener('mousedown', mousePos, false);
canvas.addEventListener('mousemove', mousePos, false);
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

    this.location = {
        x: mouse.x,
        y: mouse.y
    }

    this.accel = {
        x: -1.5 + Math.random() * 3,
        y: -1.5 + Math.random() * 3
    }
    
    this.radius = 2.5 + Math.random() * 2.5
    
    this.color = randomColor()
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.rect(c.location.x, c.location.y, c.radius, c.radius);
        ctx.fill();

        if (scatter) {
            c.speed.x += c.accel.x;
            c.speed.y += c.accel.y;

            c.location.x += c.speed.x;
            c.location.y += c.speed.y;
        }
    }
}

setInterval(draw, 33);

canvas.addEventListener("mousemove", function() {
    for (var i = 0; i < 1; i++) {
        circles.push(new circle())
    }
});

document.getElementById("scatter").addEventListener("mousedown", function() {
    scatter = true;
    
    document.getElementById("scatter").style.display = "none";
});
