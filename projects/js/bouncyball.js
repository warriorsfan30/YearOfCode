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
    
    var x = 52.5;
    var distance = 30;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, height/2, 50, 0, 2 * Math.PI);
        ctx.fill();
        x += distance;
        if (x > width - 53) {
            distance = distance * -1
        }
        if (x < 53) {
            distance = distance * -1
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
