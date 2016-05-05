setInterval(function() {
    debugger;
    var active = $(".active").removeClass('active');
    if (active.next() && active.next().length) {
        active.next().addClass('active');
    } else {
        active.siblings(":first").addClass('active');
    }
}, 3500);
