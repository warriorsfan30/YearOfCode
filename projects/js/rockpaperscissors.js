$("img").click(function() {
    var user;
    user = this.id;

    var computer = Math.random();

    if (computer <= 0.33) {
        computer = "Rock"
    } else if (computer <= 0.67) {
        computer = "Scissors"
    } else {
        computer = "Paper"
    }

    $(".cpu").html("The computer chose - " + computer);
    $(".you").html("You chose - " + user);
    $(".result").html("");

    if (computer == user) {
        $(".result").html("It's a tie!");
    } else {
        if (user == "Paper") {
            if (computer == "Rock") {
                $(".result").html("You win!");
            } else {
                $(".result").html("You lose!");
            }
        }

        if (user == "Rock") {
            if (computer == "Scissors") {
                $(".result").html("You win!");
            } else {
                $(".result").html("You lose!");
            }
        }

        if (user == "Scissors") {
            if (computer == "Paper") {
                $(".result").html("You win!");
            } else {
                $(".result").html("You lose!");
            }
        }
    }
});
