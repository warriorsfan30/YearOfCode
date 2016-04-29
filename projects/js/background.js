$("body").keyup(function() {
    var background_color = $(".background-color").val();
    $("body").css({"background": background_color});
    $("input").css({"color": background_color});
});
