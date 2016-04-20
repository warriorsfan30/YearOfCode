$(document).ready(function() {
    $(".button_container").toggleClass("active");
    $(".menu").toggleClass("show");

    $(".button_container").click(function() {
        $(this).toggleClass("active");
        $(".menu").toggleClass("show");
    });

    $(".menu a").click(function() {
        $(".button_container").toggleClass("active");
        $(".menu").toggleClass("show");
    });
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
