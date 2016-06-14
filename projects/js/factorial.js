var fac = function(num) {
    var answer = 1;
    for (var i = num; i > 0; i--) {
        answer *= i;
    }
    return answer
}

$("body").keyup(function() {
    var num = $(".num").val();
    var factorial = fac(num);
    $("p").html(factorial);
});
