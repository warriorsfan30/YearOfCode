function initCanvas() {
    var canvas = document.getElementById("my_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext("2d");
    ctx.canvas.addEventListener("mousemove", function (event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById("status");
        status.innerHTML = mouseX + " | " + mouseY;
    });

    ctx.canvas.addEventListener("click", function (event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        //alert(mouseX + " | " + mouseY);
        ctx.fillStyle = "orange";
        ctx.fillRect(mouseX-15, mouseY-15, 30, 30);
    });
}

window.addEventListener("load", function (event) {
    initCanvas();
});

window.addEventListener("resize", function () {
    var canvas = document.getElementById("my_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
