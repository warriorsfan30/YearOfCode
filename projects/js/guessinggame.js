var submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    var number = Math.floor(Math.random() * 100 + 1);
    
    var guess = document.getElementById("guess").value;
    var response = document.getElementById("response");

    if (guess > 100) {
        response.innerHTML = "That number is not in the range of 1-100";
    } else if (guess < 1) {
        response.innerHTML = "That number is not in the range of 1-100";
    } else {
        response.innerHTML = "";
        if (guess == number) {
            response.innerHTML = "Congratulations, You guessed the right number";
        }
        else if (guess != number) {
            var distance = guess - number;
            var howClose = Math.abs(distance);
            
            response.innerHTML = "Keep trying you were only " + howClose + " away. The correct number was " + number + ".";
        }
    }
});
