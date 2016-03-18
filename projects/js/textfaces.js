var textfaces = ["( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)", "̿'̿'\̵͇̿̿\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿", "┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴", "༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽", "ಠ⌣ಠ", "(¬_¬)", "ಠ~ಠ", "ಠ‿↼", "(─‿‿─)", "( ಠ ͜ʖರೃ)", "☜(˚▽˚)☞", "(._.) ( l: ) ( .-. ) ( :l ) (._.)"];

var button = document.getElementById("btn");

button.addEventListener("click", function() {
    var randomNum = Math.floor(Math.random() * textfaces.length);
    document.getElementById("textfaces").innerHTML = textfaces[randomNum];
});
