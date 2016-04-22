$(document).ready(function() {
    $(".nav-icon").hide();
    $("h1").hide();
    $("p").hide();
    $(".ui").hide();
    $("content").hide();
    
    $(".nav-icon").fadeIn(1000);
    $("h1").fadeIn(1000);
    $("p").fadeIn(1000);
    $(".ui").fadeIn(1000);
    $("content").fadeIn(1000);
});

$(".nav-icon").click(function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("show");
});

var wow = new WOW().init();
