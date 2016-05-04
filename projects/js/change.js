var randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

$(document).ready(function() {
    var font = randomColor();
    var background = randomColor();

    $(".font").click(function() {
        $("body").css({
            "color": font
        });
        $("button").css({
            "color": font
        });
        font = randomColor();
    });

    $(".background").click(function() {
        $("body").css({
            "background": background
        });
        background = randomColor();
    });
});
