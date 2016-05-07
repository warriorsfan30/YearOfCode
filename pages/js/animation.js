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
    $(".menu").toggleClass("active");
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

var musicKeys = [];
var musicStrKeys = '77,85,83,73,67';

$(document).keydown(function(e) {
    musicKeys.push(e.keyCode);
    if (keys.toString().indexOf(musicStrKeys) >= 0) {
        musicKeys = [];
        $(".music").addClass("active");
    }
});

$(".GDFR").click(function() {
    $('body').addClass('background').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/3S80EMFCkog?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    $(".music").hide();
});

$(".LeanOn").click(function() {
    $('body').addClass('background').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/EZpOLOLbwJw?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    $(".music").hide();
});
