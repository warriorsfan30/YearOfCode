function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
};

var color = randomColor();

function initCanvas() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var width = canvas.width;
    var height = canvas.height;

    var y = 252.5;
    var maxHeight = 253;
    var gravity = 0;
    var distance = 10;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(width / 2, y, 50, 0, 2 * Math.PI);
        ctx.fill();
       
        if (maxHeight < canvas.height - 52.5) {
            y += distance;
            if (y > canvas.height - 53) {
                maxHeight = maxHeight + gravity
                distance = distance * -1
                gravity = gravity + 23
            }
            if (y < maxHeight) {
                if (maxHeight < canvas.height - 52.5) {
                    distance = distance * -1
                    gravity = gravity + 1
                }
            }
        }

    }
    var animateInterval = setInterval(animate, 30);
}

window.addEventListener("load", function(event) {
    initCanvas();
});

window.addEventListener("resize", function() {
    var canvas = document.getElementById("my_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
