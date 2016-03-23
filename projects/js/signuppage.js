$(document).ready(function() {
  $("#submit").click(function() {
      var firstname = $('#fname').val();
      var lastname = $('#lname').val();
      var email = $('#email').val();
      var username = $('#uname').val();
      $("p").append("Congratulations " + firstname + " " + lastname + " you're account has successfully been created. You have used the email: " + email + " and you have the username of " + username + ".");
      $("div").addClass("hide");
  });
});
