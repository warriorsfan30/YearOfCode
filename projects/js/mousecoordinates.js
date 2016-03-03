function initCanvas() {
    var ctx = document.getElementById("my_canvas").getContext("2d");
    ctx.canvas.addEventListener("mousemove", function(event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById("status");
        status.innerHTML = mouseX + " | " + mouseY;
    });
    
    ctx.canvas.addEventListener("click", function(event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        alert(mouseX + " | " + mouseY);
    });
}

window.addEventListener("load", function(event) {
    initCanvas();
});
