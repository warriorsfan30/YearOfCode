var randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

var color = randomColor();

$("body").keyup(function() {
    var name = $(".name").val();
    $("h1").html("Hello, " + name);
    $("body").css({"background": color});
    color = randomColor();
});
