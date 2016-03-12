var quotes = ["Life is like riding a bicycle. To keep your balance, you must keep moving!", "Don't count the days. Make the days count.", "If Plan A didn't work, there are 25 more letters in the alphabet.", "The greater the storm, the brighter the rainbow.", "You only live once. But, if you do it right, once is enough.", "Every accomplishment starts with the decision to try.", "Failure is the opportunity, to begin again more intelligently."];

var button = document.getElementById("btn");

button.addEventListener("click", function() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = "\"" + quotes[randomNum] + "\"";
});
