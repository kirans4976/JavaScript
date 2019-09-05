//we can inclue common methods for different objects by using, call, apply & bind

var obj = { num: 2 };

var obj2 = { num: 5 };

var addtoThis = function(a) {
    return this.num + a;
}

var addtoThis1 = function(a, b, c) {
    return this.num + a + b + c;
}

// syntax functionname.call(object, function arguments)
console.log(addtoThis.call(obj, 3))

//if func arguments are more

console.log(addtoThis1.call(obj, 1, 2, 3))

var arr = [1, 2, 3];

// for apply we will pass array
console.log(addtoThis1.apply(obj, arr))
console.log(addtoThis1.apply(obj2, arr)) // same method but different object

// returns addtoThis type function
console.log(addtoThis.bind(obj, arr))

var bound = addtoThis1.bind(obj);

// args depend on func arguments
console.log(bound(1, 2, 3))