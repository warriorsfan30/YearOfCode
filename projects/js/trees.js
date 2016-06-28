//Adapted from a tutorial

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    var length, divergence, reduction, line_width, start_points = [];

    init();

    function init() {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, W, H);

        length = 100 + Math.round(Math.random() * 50);

        divergence = 10 + Math.round(Math.random() * 50);

        reduction = Math.round(50 + Math.random() * 20) / 100;

        line_width = 10;

        var trunk = {
            x: W / 2,
            y: length + 50,
            angle: 90
        };

        start_points = [];

        start_points.push(trunk);

        ctx.beginPath();
        ctx.moveTo(trunk.x, H - 50);
        ctx.lineTo(trunk.x, H - trunk.y);
        ctx.strokeStyle = "brown";
        ctx.lineWidth = line_width;
        ctx.stroke();

        branches();
    }

    function branches() {
        length = length * reduction;
        line_width = line_width * reduction;
        ctx.lineWidth = line_width;

        var new_start_points = [];
        ctx.beginPath();
        for (var i = 0; i < start_points.length; i++) {
            var sp = start_points[i];
            var ep1 = get_endpoint(sp.x, sp.y, sp.angle + divergence, length);
            var ep2 = get_endpoint(sp.x, sp.y, sp.angle - divergence, length);

            ctx.moveTo(sp.x, H - sp.y);
            ctx.lineTo(ep1.x, H - ep1.y);
            ctx.moveTo(sp.x, H - sp.y);
            ctx.lineTo(ep2.x, H - ep2.y);

            ep1.angle = sp.angle + divergence;
            ep2.angle = sp.angle - divergence;

            new_start_points.push(ep1);
            new_start_points.push(ep2);
        }

        if (length < 10) ctx.strokeStyle = "green";
        else ctx.strokeStyle = "brown";
        ctx.stroke();
        start_points = new_start_points;

        if (length > 2) setTimeout(branches, 50);
        else setTimeout(init, 500);
    }

    function get_endpoint(x, y, a, length) {
        var epx = x + length * Math.cos(a * Math.PI / 180);
        var epy = y + length * Math.sin(a * Math.PI / 180);
        return {
            x: epx,
            y: epy
        };
    }

}
