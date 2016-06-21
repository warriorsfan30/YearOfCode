$(document).ready(function() {
    var randomColor = function() {
        return '#' + Math.random().toString(16).slice(2, 8);
    }

    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")

    var height = window.innerHeight
    var width = window.innerWidth

    var mouse = {};
    var hover;

    var genTime = 1000;
    var score = 0;

    canvas.width = width
    canvas.height = height

    var circle_count = 10;
    var circles = [];

    var generate = function() {
        for (var i = 0; i < circle_count; i++) {
            circles.push(new circle());
        }
    }

    setInterval(generate, 1000);

    canvas.addEventListener('mousemove', mousePos, false);
    canvas.addEventListener('touch', mousePos, false);

    canvas.addEventListener('mouseout', function() {
        $("canvas").hide();
        $("#score").hide();
        $("#message").html("Sorry you lost. You finished with a score of " + score + "!");
    }, false);

    function mousePos(e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
    }

    function circle() {
        this.speed = {
            x: -2.5 + Math.random() * 5,
            y: 2.5 + Math.random() * 5
        }

        this.location = {
            x: Math.random() * width,
            y: Math.random() * height * -1
        }

        this.accel = {
            x: 0,
            y: 0
        }
        this.radius = 5 + Math.random() * 10
        this.fill = randomColor();
    }

    var draw = function() {
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = "lighter";

        ctx.font = "30px Quicksand";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Avoid the dots! Ctrl + R to restart.", width / 2, height / 2);

        for (var i = 0; i < circles.length; i++) {
            var c = circles[i];

            ctx.beginPath();
            ctx.fillStyle = c.fill;
            ctx.arc(c.location.x, c.location.y, c.radius, Math.PI * 2, false);
            ctx.fill();

            c.speed.x += c.accel.x;
            c.speed.y += c.accel.y;

            c.location.x += c.speed.x;
            c.location.y += c.speed.y;

            if (mouse.x > c.location.x - c.radius && mouse.x < c.location.x + c.radius && mouse.y > c.location.y - c.radius && mouse.y < c.location.y + c.radius) {
                hover = true;
            }

            if (hover) {
                $("canvas").hide();
                $("#score").hide();
                $$("#message").html("Sorry you lost. You finished with a score of " + score + "!");
            }
        }
    }

    setInterval(draw, 33);

    var increase = function() {
        if (mouse.x > 1 && mouse.y > 1 && !hover) {
            score++;
            genTime -= 100;
            $("#score").html("Score - " + score);
            console.log(redDots);
        }

        if (mouse.x > canvas.width || mouse.y > canvas.height || mouse.x < 0 || mouse.y < 0) {
            hover = true;
        }
    }

    setInterval(increase, 1000);
});
