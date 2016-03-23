$(document).ready(function() {
  $("#submit").click(function() {
      var radius = $("#radius").val();
      var rsquared = radius * radius;
      $("p").html("The area of the circle is " + rsquared + "π.");
  });
});    
