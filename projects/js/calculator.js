$(document).ready(function() {
  $("#submitq").click(function() {
      var dividend = $('#dividend').val();
      var divisor = $('#divisor').val();
      var answerq = dividend/divisor;
      $(".quotient").html("The quotient = " + answerq);
  });
  
  $("#submitm").click(function() {
      var factor1 = $('#factor1').val();
      var factor2 = $('#factor2').val();
      var answerm = factor1*factor2;
      $(".product").html("The product = " + answerm);
  });
  
  $("#submits").click(function() {
      var minuend = $('#minuend').val();
      var subtrahend = $('#subtrahend').val();
      var answers = minuend - subtrahend;
      $(".difference").html("The difference = " + answers);
  });
  
  $("#submita").click(function() {
      var addend1 = parseInt($("#addend1").val());
      var addend2 = parseInt($("#addend2").val());
      var answera = addend1 + addend2;
      $(".sum").html("The sum = " + answera);
  });
});
