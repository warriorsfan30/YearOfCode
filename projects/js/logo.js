var backgroundChange = function() {
    var randomColor = "#" + Math.random().toString(16).slice(2, 8);
    $("body").css({"background": randomColor});
}

setInterval(backgroundChange, 2500);
