let x = function() {
    console.log('i am called from inside a function');
};

let y = function(callback) {
    console.log('do something');
    callback();
}

y(x);

//*********************************************************************************************

let calc = function(num1, num2, calcType) {
    if (calcType === "add") {
        return num1 + num2;
    } else if (calcType === "multiply") {
        return num1 * num2;
    }
};

console.log(calc(2, 3, 'add'));

//the best way to do above calc function is to do abstract way

let add = function(a, b) {
    return a + b;
};

let multiply = function(a, b) {
    return a * b;
};

let doWhatEver = function(a, b) {
    console.log(`here r ur 2 numbers back ${a},${b}`);
    //return a * b;
}

let calc1 = function(num1, num2, callback) {
    // if someone passes other than function, here is that condition
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
};


console.log('callback multiply: ', calc1(2, 3, multiply));
console.log('callback doWhatever: ', calc1(2, 3, doWhatEver)); //as this not returning anything it shows as undefined

//few patterns
// as the below function doesn't have name , it is called anonymous functions
console.log('callback subtract: ', calc1(2, 3, function(a, b) { return a - b; }));

//********************************************************************

var myArr = [{
        num: 5,
        str: 'apple'
    },
    {
        num: 7,
        str: 'cabbage'
    },
    {
        num: 8,
        str: 'ban'
    }
];

// sort functional in javascript
myArr.sort(function(val1, val2) {
    if (val1.str < val2.str) {
        return -1;
    } else {
        return 1;
    }
});

console.log(myArr);