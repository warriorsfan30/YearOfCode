function findLongestWord(str) {
    var words = str.split(" ");
    return words.sort(function(a, b) {
        return b.length - a.length;
    })[0];
}

$("body").keyup(function() {
    var str = $(".str").val();
    var word = findLongestWord(str);
    $("p").html(word);
});
