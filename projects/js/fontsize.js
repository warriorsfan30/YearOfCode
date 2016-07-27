$("body").keyup(function() {
    var str = $(".str").val();
    $("h1").css({"font-size": str + "px"});
});
