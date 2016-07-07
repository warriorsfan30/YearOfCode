var randomRGB = function() {
    return "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")"
}

var randomHex = function() {
    return "#" + Math.random().toString(16).slice(2, 8)
}

var random = function(num) {
    return Math.floor(Math.random() * num)
}

var randomInt = function(min, max) {
    return Math.floor(Math.random() * max - min + min)
}

var color = randomRGB();

$("div").draggable();
$("div").css({"background": color});

$("button").click(function() {
    $("body").append("<div></div>");
    $("div").draggable();
    $("div").css({"background": color});
});
