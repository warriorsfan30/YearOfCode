$("#submit").click(function() {
    var message1 = $(".num1").val();
    var message2 = $(".num2").val();
    var message3 = $(".num3").val();
    
    $(".message1").html(message1);
    $(".message2").html(message2);
    $(".message3").html(message3);
    
    $(".info").remove();
    $("div").removeClass("hidden");
});

setInterval(function() {
    debugger;
    var active = $(".active").removeClass('active');
    if (active.next() && active.next().length) {
        active.next().addClass('active');
    } else {
        active.siblings(":first").addClass('active');
    }
}, 3500);
