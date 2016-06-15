var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

var W = window.innerWidth, 
    H = window.innerHeight;

canvas.width = W;
canvas.height = H;

function Box(_x, _y) {
    this.x = _x;
    this.y = _y;

    this.xVel = 10 + Math.random() * 20;
    this.yVel = 1;

    this.width = 20
    this.height = 20;

    this.r = Math.round(Math.random() * 255);
    this.g = Math.round(Math.random() * 255);
    this.b = Math.round(Math.random() * 255);

    this.rgba = "rgba(" + this.r + "," + this.g + "," + this.b + ",1)";

    this.draw = function() {
        ctx.strokeStyle = this.rgba;
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        this.update();
    }

    this.update = function() {
        if (this.x < 0) {
            this.x = 0;
            this.xVel *= -1;
        }

        if (this.x > W - this.width) {
            this.x = W - this.width;
            this.xVel *= -1;
        }

        if (this.y < 0) {
            this.y = 0;
            this.yVel *= -1;
        }
        
        if (this.y < H - this.height)
            this.yVel += .25;

        if (this.y > H - this.height) {
            this.xVel *= .5
            this.yVel *= .5

            this.y = H - this.height;
            this.yVel *= -1;
        }

        this.x += this.xVel;
        this.y += this.yVel;
    }
}

var boxes = [];

function draw() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.5)"
    ctx.fillRect(0, 0, W, H);

    ctx.globalCompositeOperation = "lighter"

    for (i = 0; i < boxes.length; i++)
        boxes[i].draw();

    update();
}

function update() {
    for (i = 0; i < boxes.length; i++)
        boxes[i].update();
}

setInterval(function() {
    boxes.push(new Box(Math.random() * W, 0))
}, 250);

setInterval(draw, 30);
