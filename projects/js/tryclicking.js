var Button = $(".randomPos");

function random(number) {
    return Math.floor(Math.random() * number);
}

Button.on("mouseenter", function() {
    $(".randomPos").css({
        position: "absolute",
        top: random(75) + "%",
        left: random(75) + "%"
    });
});

Button.on("click", function() {
    alert("Congratulations! You clicked the button! You must have illegally fast hands or you changed the code for this program!");
});
