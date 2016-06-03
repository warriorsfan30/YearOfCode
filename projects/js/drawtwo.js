function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
};

var color = randomColor();

function initCanvas() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d");
    var clear = document.getElementById("clear");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.font = "30px Quicksand";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Hover over the canvas to draw. Click to change color.", canvas.width / 2, canvas.height / 2);

    ctx.canvas.addEventListener("mousemove", function(event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById("status");
        status.innerHTML = mouseX + " | " + mouseY;
    });

    ctx.canvas.addEventListener("click", function(event) {
        color = randomColor();
    });

    ctx.canvas.addEventListener("mousemove", function(event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(mouseX, mouseY, 5, 0, 2 * Math.PI);
        ctx.fill();
    });

    clear.addEventListener("click", function(event) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Quicksand";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Hover over the canvas to draw. Click to change color.", canvas.width / 2, canvas.height / 2);
    });
}

window.addEventListener("load", function(event) {
    initCanvas();
});

window.addEventListener("resize", function() {
    var canvas = document.getElementById("my_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
