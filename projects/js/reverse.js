function reverse(s) {
    var o = "";
    for (var i = s.length - 1; i >= 0; i--) {
        o += s[i];
    }
    return o;
}

$("body").keyup(function() {
    var string = $(".string").val();
    var reversedString = reverse(string);
    $(".reversedString").html(reversedString);
});
