$(".dice1").click(function() {
    var dice1Probability = Math.floor(Math.random() * 6 + 1);
    $(this).html(dice1Probability);
});

$(".addDice").click(function() {
    $(this).removeClass("add");
    $(this).addClass("dice1");
    $(this).html("Roll");
    $(".dice1").click(function() {
        var dice1Probability = Math.floor(Math.random() * 6 + 1);
        $(this).html(dice1Probability);
    });
});
