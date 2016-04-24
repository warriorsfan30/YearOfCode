window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    }

    function randomInt(min, max) {
        return Math.random() * (max - min) + min;
    }

    
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    var particles = [];
    var mouse = {};
    var score = 0;
    
    var amountGenerated = 15;
    
    var generate = function() {
        for (var i = 0; i < amountGenerated; i++) {
            particles.push(new particle());
        }
        amountGenerated += 5
    };
    
    setInterval(generate, 2000);

    function track_mouse(e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
    }

    function particle() {
        this.speed = {
            x: -2.5 + Math.random() * 5,
            y: -2.5 + Math.random() * 5
        };

        this.location = {
            x: Math.random() * width,
            y: Math.random() * height
        };
        
        this.radius = 10 + Math.random() * 20;
        
        this.color = randomColor();
        
        this.popped = true;
    }

    function draw() {
        ctx.globalCompositeOperation = "source-over";
        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = "lighter";
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            if (p.popped) {
                ctx.beginPath();
                ctx.strokeStyle = p.color;
                ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
                ctx.stroke();
                ctx.closePath();

                p.location.x += p.speed.x;
                p.location.y += p.speed.y;
            }

            if (!p.popped) {
                p.location.x = false
                p.location.y = false
            }
            if (mouse.x > p.location.x - p.radius && mouse.x < p.location.x + p.radius && mouse.y > p.location.y - p.radius && mouse.y < p.location.y + p.radius) {
                p.popped = false;
                score++;
            }

            document.getElementById("score").innerHTML = 'Score - ' + score;
        }
    }

    
    canvas.addEventListener("mousemove", track_mouse);

    
    setInterval(draw, 33);
};
