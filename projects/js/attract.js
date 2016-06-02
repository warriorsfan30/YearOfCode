// Credit to Kabir for helping me!

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var W = canvas.width = window.innerWidth;
var H = canvas.height = window.innerHeight;

var particles = [];
var mouse = {
    x: W * 0.5,
    y: H * 0.5
};

function particle(x, y) {
    this.x = this.oldX = x
    this.y = this.oldY = y
}

particle.prototype.velocity = function() {
    var velocityX = this.x - this.oldX;
    var velocityY = this.y - this.oldY;

    this.oldX = this.x;
    this.oldY = this.y;

    this.x += velocityX;
    this.y += velocityY;
}

particle.prototype.attract = function(x, y) {
    var dx = x - this.x;
    var dy = y - this.y;

    var distance = Math.sqrt(dx * dx + dy * dy);

    this.x += dx / distance;
    this.y += dy / distance;
}

particle.prototype.draw = function() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 5, this.oldX + this.oldY * Math.PI);
    ctx.stroke();
}

for (var i = 0; i < 500; i++) {
    particles[i] = new particle(Math.random() * W, Math.random() * H);
}

function frame() {
    requestAnimationFrame(frame);
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < particles.length; i++) {
        particles[i].attract(mouse.x, mouse.y);
        particles[i].velocity();
        particles[i].draw();
    }
}

requestAnimationFrame(frame);

function updateMouse(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

canvas.addEventListener("mousemove", updateMouse);
