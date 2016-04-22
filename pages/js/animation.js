$(document).ready(function() {
    $(".nav-icon").hide();
    $("content").hide();
    
    $(".nav-icon").fadeIn(1000);
    $("content").fadeIn(1000);
});

$(".nav-icon").click(function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("show");
});

var wow = new WOW().init();
