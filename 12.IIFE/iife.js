/*executing anonymous function or 
self invoked anonymous function or immediately invoked function expression(IIFE)*/

// function 
function increment(i) {
    return i + 1;
}

// function expression

var increment = function(i) {
    return i + 1;
}

// executiong many times
console.log(increment(1));
console.log(increment(1));

//there r some times when u want to execute function as soon as u defined

(function(i) {

    return i + 1;
})(console.log(1));


// other syntax
(function(i) {

    return i + 1;
}(console.log(1)));


// if function returns returns nothing
! function() { /* code here*/ };

//uses >> minify

// here for using this function jquery.js must require

/* reducing scope lookup & $ is in within the function, hence code is faster.
 iife's are closures that  helps out u to establish the private methods
while exposing some properties for later use*/
(function($) {
    $(this).addClass('MyClass');
})(window.jQuery); // here minifyng window.jqery to $

//********************************************************************************

// writting js library using IIFE

var counter = (function() {
    i = 0;
    return {
        get: function() {
            return i;
        },
        set: function(val) {
            i = val;
        },
        increment: function() {
            i++;
        }
    }
})();

console.log(counter.get());
counter.set(5);
counter.increment();
console.log(counter.get());