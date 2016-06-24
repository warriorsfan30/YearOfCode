window.onload = function() {
  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
  var mouseDown = 0;
  document.body.onmousedown = function() {
    ++mouseDown;
  }
  document.body.onmouseup = function() {
    --mouseDown;
  }
  // Random Color Function
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
  var rad = 10;
  var color = randomColor();
  //Make the canvas occupy the full page
  var W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var chance = Math.random();
  var particles = [];
  //Lets create some particles now
  var particle_count = 100;

  function gen() {
    for (var i = 0; i < particle_count; i++) {
      particles.push(new particle());
    }
  }
 

  function particle() {
    //speed, life, location, life, colors
    //speed range = -2.5 to 2.5
    this.speed = {
      x: -2.5 + Math.random() * 5,
      y: -2.5 + Math.random() * 5
    };
 
      this.location = {
        x: W / 2,
        y: H / 2
      };
  
    //radius range = 10-30
    this.radius = 10 + Math.random() * 20;

  }

  function draw() {
    ctx.globalCompositeOperation = "source-over";
    //Painting the canvas black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();

      //lets move the particles
      p.location.x += p.speed.x;
      p.location.y += p.speed.y;
    }
    if (rad < 100) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(W / 2, H / 2, rad, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
    }
    if (rad > 100) {
      gen();
      rad = 10
    }
    if (mouseDown) {
      rad++
    }
  }
  
  setInterval(draw, 10);

};
