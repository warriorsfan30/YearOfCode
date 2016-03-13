function clickCount() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("clicks").innerHTML = localStorage.clickcount;
    } else {
        document.getElementById("clicks").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

if (localStorage.clickcount > 0) {
    document.getElementById("clicks").innerHTML = localStorage.clickcount;
}
