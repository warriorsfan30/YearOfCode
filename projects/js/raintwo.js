var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var color = "white";

var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width;
canvas.height = height;

var rain_count = Math.round(Math.random() * 10);
var rain_drops = [];

var generate = function() {
    for (var i = 0; i < rain_count; i++) {
        rain_drops.push(new rain());
    }
}

setInterval(generate, 100);

function rain() {
    this.speed = {
        y: 2.5 + Math.random() * 5
    }

    this.location = {
        x: 0 + Math.random() * width,
        y: -100 + Math.random() * 100
    }

    this.accel = {
        y: 1.5 + Math.random() * 3
    }
    
    this.height = 10 + Math.random() * 40;
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#024a59";
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < rain_drops.length; i++) {
        var r = rain_drops[i];

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(r.location.x, r.location.y, 0.5, r.height);
        ctx.fill();

        r.speed.y += r.accel.y/5;

        r.location.y += r.speed.y/0.5;
    }
}

setInterval(draw, 33);

var rainHarder = function() {
    rain_count += Math.round(Math.random() * 10);
}

setInterval(rainHarder, 2500);
