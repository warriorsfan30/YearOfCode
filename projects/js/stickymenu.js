$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= window.innerHeight - 100) {
            $(".menu").addClass("active");
        }
        else {
            $(".menu").removeClass("active");
        }
    });
});

// Credit for the smooth-scroll effect goes to CSS-Tricks

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
