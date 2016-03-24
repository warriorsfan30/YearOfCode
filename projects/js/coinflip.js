function Flip() {
  var Probability = Math.random();
  if (Probability > 0.5) {
    document.getElementById("message").innerHTML = "Heads!";
  }
  if (Probability < 0.5) {
    document.getElementById("message").innerHTML = "Tails!";
  } 
}
