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

var musickeys = [];
var music = '77,85,83,73,67';

$(document).keydown(function(e) {
    musickeys.push(e.keyCode);
    if (musickeys.toString().indexOf(music) >= 0) {
        musickeys = [];
        alert('Music!')
        document.getElementsByTagName("HTML")[0].setAttribute("contenteditable", "true");
        $('body').addClass('background').append('<iframe width="0" height="0" src="https://www.youtube.com/embed/EZpOLOLbwJw?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    }
});

var editkeys = [];
var edit = '69,68,73,84';

$(document).keydown(function(e) {
    editkeys.push(e.keyCode);
    if (editkeys.toString().indexOf(music) >= 0) {
        editkeys = [];
        alert('Edit the Text!')
        document.getElementsByTagName("BODY")[0].setAttribute("contenteditable", "true");
    }
});
