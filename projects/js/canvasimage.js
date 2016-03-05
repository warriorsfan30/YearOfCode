var bg = new Image();
bg.src = "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=584f5a7032d518ca603adb4f15c92311";

function initCanvas() {
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width,
        cH = ctx.canvas.height;

    function Background() {
        this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
        this.render = function() {
            ctx.drawImage(bg, this.x-=5, 0);
            if (this.x <= -1560) {
                this.x = 0;
            }
        }
    }
    var background = new Background();

    function animate() {
        ctx.save();
        ctx.clearRect(0, 0, cW, cH);
        // Start drawing here
        background.render();
        // End drawing here
        ctx.restore();
    }
    var animateInterval = setInterval(animate, 30);
}
window.addEventListener('load', function(event) {
    initCanvas();
});
