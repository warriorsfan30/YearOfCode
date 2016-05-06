var button = $(".button");

function random(number) {
    return Math.floor(Math.random() * number);
}

button.on("mouseenter", function() {
    $(this).css({
        position: "absolute",
        top: random(90) + "%",
        left: random(75) + "%"
    });
});

button.on("click", function() {
    alert("Congratulations, you clicked the button. You have illegally fast mouse skills.");
});
