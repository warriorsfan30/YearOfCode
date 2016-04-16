var randomColor = function() {
    return "#" + Math.random().toString(16).slice(2, 8);
}

function random(number) {
    return Math.floor(Math.random() * number);
}

var color = randomColor();
var gameswon = 0;

$("#current").click(function() {
    color = randomColor();

    $("#current").css({
        position: "absolute",
        top: random(85) + "%",
        left: random(90) + "%"
    });
    
    $("#current").html(gameswon);
    
    gameswon = gameswon + 1;
    
    $("#gameswon").html(gameswon);
    
    if (gameswon % 73 == 0) {
        alert("The Warriors set the record for the most games won in a season!");
    }
});
