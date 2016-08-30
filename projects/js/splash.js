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

var circles = [];

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
    
    this.radius = 10 + Math.random() * 20
    
    this.color = randomColor();
}

var draw = function() {
    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];

        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.location.x, c.location.y, c.radius, Math.PI * 2, false);
        ctx.fill();
        
        if (c.radius < width * 2) {
            c.radius += 75;
        }
        
        if (c.radius < height * 2) {
            c.radius += 75;
        }
    }
}

setInterval(draw, 33);

canvas.addEventListener("mousedown", function() {
    for (var i = 0; i < 1; i++) {
        circles.push(new circle())
    }
});
