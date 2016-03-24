function isPrime(n) {
  if (n < 2) return false;

  var q = Math.floor(Math.sqrt(n));

  for (var i = 2; i <= q; i++) {
      if (n % i == 0) {
          return "That number is not prime";
      }
  }

  return "That number is prime";
}

document.getElementById("submit").addEventListener("click", function() {
  var number = document.getElementById("prime").value;
  document.getElementById("message").innerHTML = isPrime(number).toString();
}, false);
