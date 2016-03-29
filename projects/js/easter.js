var randomColor = function() {
    return "#" + Math.random().toString(16).slice(2, 8);
}

function random(number) {
    return Math.floor(Math.random() * number);
}

var color = randomColor();
var eggsfound = 0;

$("#easter-egg").click(function() {
    color = randomColor();

    $("#easter-egg").css({
        position: "absolute",
        background: color,
        top: random(85) + "%",
        left: random(90) + "%"
    });
    
    eggsfound = eggsfound + 1;
    
    $("#eggsfound").html(eggsfound);
    
    if (eggsfound % 100 == 0) {
        alert("An egg-finding master is in the house!");
    }
});
