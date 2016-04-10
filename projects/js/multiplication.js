function randomNum(digits) {
    return Math.floor(Math.pow(10, digits - 1) + Math.random() * 9 * Math.pow(10, digits - 1));
}

function askQuestion(digits) {
    $(".result").html("");

    var factor1 = randomNum(digits);
    var factor2 = randomNum(digits);
    var correctanswer = factor1 * factor2;  

    $(".question").html(factor1 + " × " + factor2);
    
    $("#check").click(function() {
        var answer = parseInt($(".answer").val(), 10);
        if (correctanswer == answer) {
            $(".result").html("Correct");
            $(".next").show();
            console.log("✓ Correct");
        } else {
            $(".result").html("Wrong");
            $(".next").hide();
            console.log("✘ Wrong");
        }
    });
    
    $(".next").click(function() {
        askQuestion(digits);
        $(".next").hide();
        console.log(score);
    });
}



$(document).ready(function() {
    $(".answer").hide();
    $("#check").hide();
    $(".next").hide();

    var digits = 0;

    $(".digits-1").click(function() {
        digits += 1;
    });

    $(".digits-2").click(function() {
        digits += 2;
    });

    $(".digits-3").click(function() {
        digits += 3;
    });

    $(".btn").click(function() {
        $(".btn").hide();
        $(".answer").show();
        $("#check").show();

        askQuestion(digits);
    });
});
