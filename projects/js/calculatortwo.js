 $(document).ready(function() {
    $(".addition").click(function() {
        var number1 = parseInt($("#number1").val());
        var number2 = parseInt($("#number2").val());
        var sum = number1+number2;
        $("p").html("The answer is " + sum);
    });
    
    $(".subtraction").click(function() {
        var number1 = $("#number1").val();
        var number2 = $("#number2").val();
        var difference = number1-number2;
        $("p").html("The answer is " + difference);
    });
    
    $(".multiplication").click(function() {
        var number1 = $("#number1").val();
        var number2 = $("#number2").val();
        var product = number1*number2;
        $("p").html("The answer is " + product);
    });
    
    $(".division").click(function() {
        var number1 = $("#number1").val();
        var number2 = $("#number2").val();
        var quotient = number1/number2;
        $("p").html("The answer is " + quotient);
    });
    
   $(".root").click(function() {
        var number1 = $("#number1").val();
        var root1 = Math.sqrt(number1);
        $("p").html("The square root of Number #1 is " + root1);
    });
});    
