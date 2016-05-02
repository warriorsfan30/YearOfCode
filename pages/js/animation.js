$(document).ready(function() {
    $("h1").hide();
    $("p").hide();
    $("content").hide();
    
    $("h1").fadeIn(1000);
    $("p").fadeIn(1000);
    $("content").fadeIn(1000);
});

$(document).keydown(function (e) {
    if (e.keyCode == 9) {
        alert("Edit Some Text!");
        document.getElementsByTagName("BODY")[0].setAttribute("contenteditable", "true");
    }
});

$(".nav-icon").click(function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("show");
});

var wow = new WOW().init();
