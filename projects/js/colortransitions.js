function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
};

var color = randomColor();

function colorChange() {
    color = randomColor();

    $("div").css({
        "background": color
    });
}

setInterval(colorChange, 1000);
