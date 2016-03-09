function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
};

var color = randomColor();

function initCanvas() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d");
    var h = window.innerHeight;
    var w = window.innerWidth;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var x = 0;
    var y = 0;
    var distance = 20;
    var draw = function() {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 75, 75);
        x += distance
        if (x > w) {
            distance = distance * -1
        } else if (x < 0) {
            distance = distance * -1
        }
        y += 1.5
    }
    setInterval(draw, 100);
}

window.addEventListener("load", function(event) {
    initCanvas();
});

window.addEventListener("resize", function() {
    var canvas = document.getElementById("my_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
