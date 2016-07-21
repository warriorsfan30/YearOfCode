// Adapted from a tutorial

$(function () {
    var canvas, context, image, imageData, x, y, offset;
    
    canvas = $("#canvas")[0];
    context = canvas.getContext("2d");

    imageData = context.createImageData(canvas.width, canvas.height);

    for(y = 0; y < imageData.height; y += 1) {
        for(x = 0; x < imageData.width; x += 1) {
            offset = x * 4 + y * 4 * imageData.width;
            imageData.data[offset] = Math.sin(x * 0.01) * 127 + 128;
            imageData.data[offset + 1] = Math.sin(y * 0.02) * 127 + 128;
            imageData.data[offset + 2] = Math.cos(x * 0.04 + y * 0.03) * 127 + 128;
            imageData.data[offset + 3] = 255;
        }
    }
   
    context.putImageData(imageData, 0, 0);
});

window.addEventListener("resize", function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
