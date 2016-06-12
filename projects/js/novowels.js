var rv = function(string) {
	return string.replace(/[aeiou]/ig,'');
};

$("body").keyup(function() {
    var string = $(".string").val();
    var stripVowels = rv(string);
    $("p").html(stripVowels);
});
