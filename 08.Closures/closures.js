var addTo = function(passed) {
    var inner = 2;
    return passed + inner;

}

console.log('addTo(3):', addTo(3))

/* in js variables declared outside function are automatically available inside
because js uses lexical scoping */
// closure
var passed1 = 3;
var addTo1 = function() {
    var inner = 2;
    return passed1 + inner;

}

console.log('addTo1():', addTo1())

/* expand object & see closure value
 here the closure value will not be visible in scope as the variable is global and outside the function
 link: https://stackoverflow.com/questions/35378699/chrome-devtools-console-does-not-display-closure */
console.dir(addTo1) // to look inside object
console.dir(addTo1())
var passed1 = 4;
console.dir(addTo1())


// closure keeps the variable it nedded

var addTo2 = function(passed3) {
    var add = function(inner) {
        return passed3 + inner;
    }
    return add;
}

var addThree = new addTo2(3);
var addFour = new addTo2(4);

console.dir(addThree);
console.dir(addFour);

// here closure value can be visible in the scope of the function as the variable is in the function
console.log(addThree(1));
console.log(addFour(1));