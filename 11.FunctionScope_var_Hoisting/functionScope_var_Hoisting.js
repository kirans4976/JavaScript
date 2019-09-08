// js follows lexical scoping means things defined outside available inside
// var is functional scope(function level scoping)
var x = function() {
        var y = 1;

        console.log(y);
    }
    // console.log(y); // reference error y
x();
var x1 = function() {
    if (true) {
        var y = 2;
    }
    var z = function() {
        console.log(y);
    }
    console.log(y);
    z();
};
x1();

//*********Hoisting*********************


// var y =2; // iq question
var x3 = function() {

    console.log(y) // here we are getting undefined instead of error because of hoisting
    var y = 1;

    /*  Internally js exected like below(hoisting)
    var y;
     console.log(y);
     y=1; 
     write manually this code instead of js (preffered coding)*/
}
x3();

//************************************Lack of Constant*********************************************

Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false
})

PI = 2; // doesn't logs any error thats the problem
console.log(PI);

//*************************************************************************
//const keyword

const Piq = 3.14;
//Piq = 2; // logs error in console 
console.log(Piq);

// let keyword

let k = function() {
    if (true) {
        // console.log(y); // let doesn't allow hoisting
        let y = 1;
        console.log(y);
    }
    //console.log(y); // logs error in console 
}
k();