function random(number) {
    return Math.floor(Math.random() * number);
}

var clicks = 0;
var sec = 10;
var message = false;

$("button").click(function() {
    $(this).css({
        position: "absolute",
        top: random(75) + "%",
        left: random(80) + "%"
    });

    clicks += 1;
    $(".clicks").html("Score - " + clicks);
    var timer = setInterval(function() {
        $(".seconds").html(sec);
        if (sec > 0) {
            sec -= 1;
        }
        if (sec == 0) {
            $(".clicks").addClass("hide");
            $(".seconds").addClass("hide");
            $("button").addClass("hide");
            $(".message").html("Wow! You got a score of " + clicks + ". Do you think you can beat it?");
        }

    }, 1000);
});
