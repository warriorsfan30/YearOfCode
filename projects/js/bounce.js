var randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
color = randomColor();

var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width;
canvas.height = height;

var block_count = 5;
var blocks = [];

var generate = function() {
    for (var i = 0; i < block_count; i++) {
        blocks.push(new block());
    }
}

setInterval(generate, 100);

function block() {
    this.speed = {
        y: 1.5 + Math.random() * 3
    }

    this.location = {
        x: 0 + Math.random() * width,
        y: 0 - Math.random() * 100
    }

    this.accel = {
        y: 1.5 + Math.random() * 3
    }

    this.dim = Math.random() * 20 + 25

    this.gravity = Math.random() - 1.5

    this.wind = randomInt(-10, 10);

    this.color = color;
}

var draw = function() {
    //ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    //ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < blocks.length; i++) {
        var r = blocks[i];

        ctx.beginPath();
        ctx.strokeStyle = r.color;
        ctx.rect(r.location.x, r.location.y, r.dim, r.dim);
        ctx.stroke();

        r.speed.y += r.accel.y;

        r.location.y += r.speed.y;
        r.location.x -= r.wind;

        if (r.location.y > height - r.dim) {
            r.speed.y = r.speed.y * r.gravity;
        }
    }
}

setInterval(draw, 33);

ctx.canvas.addEventListener("click", function(event) {
    color = randomColor();
});
