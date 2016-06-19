var randomColor = function() {
    return "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")"
}

var color = randomColor();

$(document).ready(function() {
    $("#color").html(color);
    $("body").css({"background": color});
});

$(document).keypress(function(e) {
    color = randomColor();
    $("#color").html(color);
    $("body").css({"background": color});
});
