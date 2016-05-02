$(document).keydown(function (e) {
    if (e.keyCode == 9) {
        alert("Edit Some Text!");
        document.getElementsByTagName("BODY")[0].setAttribute("contenteditable", "true");
    }
});
