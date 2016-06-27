$(document).ready(function() {
    $("body").hide();
    $("body").fadeIn(500);
});

$(".nav-icon").click(function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
});

$(".menu a").click(function() {
    $(".nav-icon").click();
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

var wow = new WOW().init();

var keys = [];
var edit = '69,68,73,84';

$(document).keydown(function(e) {
    keys.push(e.keyCode);
    if (keys.toString().indexOf(edit) >= 0) {
        keys = [];
        document.getElementsByTagName("HTML")[0].setAttribute("contenteditable", "true");
    }
});
