var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var colors = ['#024a59','#04a65b','#04bf56','#f2cc5d','#f3574a']

var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width;
canvas.height = height;

var rain_count = 50;
var rain_drops = [];

var generate = function() {
    for (var i = 0; i < rain_count; i++) {
        rain_drops.push(new rain());
    }
}

setInterval(generate, 1000);

function rain() {
    this.speed = {
        y: -10 + Math.random() * 5
    }

    this.location = {
        x: 0 + Math.random() * width,
        y: height + Math.random() * 1000
    }
    
    this.accel = {
        y: -0.125 + Math.random() * -0.25
    }

    this.radius = Math.random() * 20 + 10
    
    this.color = Math.floor(Math.random() * 5);
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < rain_drops.length; i++) {
        var r = rain_drops[i];

        ctx.beginPath();
        ctx.fillStyle = colors[r.color];
        ctx.arc(r.location.x, r.location.y, r.radius, Math.PI * 2, false);
        ctx.fill();
        
        r.speed.y += r.accel.y;
        r.location.y += r.speed.y;
    }
}

setInterval(draw, 33);
