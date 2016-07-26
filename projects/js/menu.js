$(".nav-icon").click(function() {
    $(".nav-icon").toggleClass("active");
    $(".menu").toggleClass("active");
    $("a").toggleClass("active");
});

$("a").click(function() {
    $(".nav-icon").toggleClass("active");
    $(".menu").toggleClass("active");
    $("a").toggleClass("active");
});
