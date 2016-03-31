function range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(".submit").click(function() {
    var minimum = parseInt($(".minimum").val());
    var maximum = parseInt($(".maximum").val());
    
    var randomRange = range(minimum, maximum);
    
    $(".random").html(randomRange);
});
