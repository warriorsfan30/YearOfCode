$("#submit").click(function() {
    var link = $("#url").val();
    $("#url").addClass("hide");
    $("#submit").addClass("hide");
    $(".display").html(link);
});
