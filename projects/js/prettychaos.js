function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
};

var color = randomColor();

function initCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var button = document.getElementById("button");

    var particles = 0;

    var width = canvas.width;
    var height = canvas.height;

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    function randomX() {
        return Math.floor(Math.random() * windowWidth);
    };

    function randomY() {
        return Math.floor(Math.random() * windowHeight);
    };

    function animate() {
        if (particles < 300) {
            ctx.globalCompositeOperation = "source-over";
            ctx.globalCompositeOperation = "lighter";
            var x = randomX();
            var y = randomY();
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, 50, 0, 2 * Math.PI);
            ctx.fill();
            particles = particles + 1;
        }
    }
    var animateInterval = setInterval(animate, 30);

    ctx.canvas.addEventListener("click", function(event) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        color = randomColor();
        particles = 0;
    });
}

window.addEventListener("load", function(event) {
    initCanvas();
});

window.addEventListener("resize", function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
