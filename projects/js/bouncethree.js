var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

var colors = ['#024a59','#04a65b','#04bf56','#f2cc5d','#f3574a']


var W = window.innerWidth,
    H = window.innerHeight;

canvas.width = W;
canvas.height = H;

function Box(_x, _y) {
    this.x = _x;
    this.y = _y;

    this.xVel = 10 + Math.random() * 20;
    this.yVel = -1 + Math.random() * 2;

    this.width = 30
    this.height = 30;

    this.rgba = colors[Math.floor(Math.random() * 5)]

    this.draw = function() {
        ctx.fillStyle = this.rgba;
        ctx.fillRect(this.x, this.y, this.width, this.height);

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
    ctx.fillStyle = "rgba(0,0,0,0.9)"
    ctx.fillRect(0, 0, W, H);

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
