function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
};

var color = randomColor();

function initCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

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
    
    function randomSize() {
        return Math.floor(Math.random() * 50);
    };

    function animate() {
        if (particles < 750) {
            ctx.globalCompositeOperation = "source-over";
            ctx.globalCompositeOperation = "lighter";
            var x = randomX();
            var y = randomY();
            var size = randomSize();
            color = randomColor();
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            ctx.fill();
            particles = particles + 1;
        }
    }
    
    var animateInterval = setInterval(animate, 30);

    ctx.canvas.addEventListener("click", function(event) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
