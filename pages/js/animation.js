$(document).ready(function() {
    $("h1").hide();
    $("p").hide();
    $("content").hide();
    
    $("h1").fadeIn(1000);
    $("p").fadeIn(1000);
    $("content").fadeIn(1000);
});

$(".nav-icon").click(function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("show");
});

var wow = new WOW().init();
