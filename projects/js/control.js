$(".left").click(function() {
    $("div").animate({
        "left": '-=10%'
    }, 1000);
});

$(".right").click(function() {
    $("div").animate({
        "left": '+=10%'
    }, 1000);
});

$(".up").click(function() {
    $("div").animate({
        "top": '-=10vh'
    }, 1000);
});

$(".down").click(function() {
    $("div").animate({
        "top": '+=10vh'
    }, 1000);
});
