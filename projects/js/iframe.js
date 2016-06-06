$("button").click(function() {
    var iframeURL = $("#iframe").val();
    var iframe = "<iframe src='" + iframeURL + "'</iframe>";
    $("#iframe-append").append(iframe);
    $("#information").hide();
    $("iframe").hide();
    $("iframe").fadeIn("slow");
});
