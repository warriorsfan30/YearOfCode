document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('submit').onclick = function changehandler() {
      var fizz = +document.getElementById('fizz').value || 1;
      var buzz = +document.getElementById('buzz').value || 1;
      var p = document.getElementById('fizzbuzz');

      var html = '';
      for (var i = 1; i < 101; i++) {
          if (i % fizz === 0 && i % buzz === 0) {
              html += "FizzBuzz, ";
          } else if (i % fizz === 0) {
              html += "Fizz, ";
          } else if (i % buzz === 0) {
              html += "Buzz, ";
          } else {
              html += i + ", ";
          }
      }
      p.innerHTML = html;
  }

  document.body.addEventListener('change', changehandler);
  changehandler();
});
