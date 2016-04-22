$(".nav-icon").click(function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("show");
});

var wow = new WOW().init();
