$(".dice1").click(function() {
    var dice1Probability = Math.floor(Math.random() * 6 + 1);
    $(this).html(dice1Probability);
});
