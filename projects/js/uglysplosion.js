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

var circle_count = 200;
var circles = [];

var generate = function() {
    for (var i = 0; i < circle_count; i++) {
        circles.push(new circle());
    }
}

setInterval(generate, 10000);

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

    if (mouse.x && mouse.y) {
        this.location = {
            x: mouse.x,
            y: mouse.y
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
    
    this.color = randomColor()
    
    this.stroke = Math.random() * 3
    
    this.radius = 10 + Math.random() * 20
}

var draw = function() {
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, width, height);

    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.fillStyle = c.color;
        c.strokeStyle = c.stroke;
        ctx.arc(c.location.x, c.location.y, c.radius, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();

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
