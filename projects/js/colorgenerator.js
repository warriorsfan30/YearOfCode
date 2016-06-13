var randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

var color = randomColor();

$(document).ready(function() {
    $("#color").html(color);
    $("body").css({"background": color});
});

$("button").click(function() {
    color = randomColor();
    $("#color").html(color);
    $("body").css({"background": color});
});
