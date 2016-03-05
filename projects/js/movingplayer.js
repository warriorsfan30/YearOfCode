function initCanvas() {
    var canvas = document.getElementById('my_canvas');
    var ctx = canvas.getContext('2d');
    var cW = ctx.canvas.width,
        cH = ctx.canvas.height;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var dist = 10;

    function Player() {
        this.x = 0, this.y = 0, this.w = 50, this.h = 50;

        this.render = function() {
            ctx.fillStyle = "orange";
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    var player = new Player();
    player.x = 100;
    player.y = 225;

    function animate() {
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        player.render();
    }
    var animateInterval = setInterval(animate, 30);

    document.addEventListener('keydown', function(event) {
        var key_press = String.fromCharCode(event.keyCode);
        if (key_press == "W" && player.y >= 5) {
            player.y -= dist;
        } else if (key_press == "S" && player.y <= (canvas.height - 50)) {
            player.y += dist;
        } else if (key_press == "A" && player.x >= dist) {
            player.x -= dist;
        } else if (key_press == "D" && player.x < (canvas.width - 50)) {
            player.x += dist;
        }
    });

}

window.onload = initCanvas();

window.addEventListener("resize", function() {
    var canvas = document.getElementById("my_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
