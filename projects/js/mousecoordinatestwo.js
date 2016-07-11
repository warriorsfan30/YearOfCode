function initCanvas() {
    var ctx = document.getElementById("my_canvas").getContext("2d");
    
    ctx.canvas.addEventListener("mousedown", function(event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById("status");
        status.innerHTML = mouseX + " | " + mouseY;
    });
    
    ctx.canvas.addEventListener("touch", function(event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById("status");
        status.innerHTML = mouseX + " | " + mouseY;
    });
}

window.addEventListener("load", function(event) {
    initCanvas();
});
