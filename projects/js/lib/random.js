/*
 * Random V0.0.1 Alpha
 * Copyright 2016, Anish Kasam
 * Free to use under the MIT license.
 */

window.u = (function() {
    function U(els) {
        
    }

    var u = {
        randomColor: function() {
            return "#" + Math.random().toString(16).slice(2, 8);
        },
        
        random: function(number) {
            return Math.floor(Math.random() * number);
        }
    };
    return u;
}());
