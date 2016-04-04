var randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
color = randomColor();

var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width;
canvas.height = height;

var rain_count = 5;
var rain_drops = [];

var generate = function() {
    for (var i = 0; i < rain_count; i++) {
        rain_drops.push(new rain());
    }
}

setInterval(generate, 100);

function rain() {
    this.speed = {
        y: -2.5 - Math.random() * 5
    }

    this.location = {
        x: 0 + Math.random() * width,
        y: height + Math.random() * 100
    }

    this.accel = {
        y: 1.5 + Math.random() * 3
    }
    
    this.radius = Math.random() * 20 + 25
    
    this.gravity = Math.random() - 0.75
    
    this.color = color;
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < rain_drops.length; i++) {
        var r = rain_drops[i];

        ctx.beginPath();
        ctx.fillStyle = r.color;
        ctx.arc(r.location.x, r.location.y, r.radius, Math.PI * 2, false);
        ctx.fill();

        r.speed.y += r.accel.y;
        r.location.y -= r.speed.y;
        
        if (r.location.y < 0 + r.radius) {
            r.speed.y = r.speed.y * r.gravity;
        }
    }
}

setInterval(draw, 33);

ctx.canvas.addEventListener("click", function(event) {
    color = randomColor();
});
