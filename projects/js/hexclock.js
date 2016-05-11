var date, hours, minutes, seconds, color;

var update = function() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    
    if (hours <= 9) {
        hours = "0" + hours;
    }
    
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    
    color = "#" + hours + minutes + seconds;
    
    $("body").css("background", color);
    
    $("h1").html(color);
}

update();

setInterval(update, 1000);
