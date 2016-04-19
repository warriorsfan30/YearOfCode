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
