//Extending function Constructors:	from base constructor to sub constructor

//base constructors

let Mammal = function(legs) {
    this.legs = legs;
}

Mammal.prototype = {
    walk() {
        return 'walking';
    },
    sleep() {
        return 'sleeping';
    }
};

let Bat = function(legs, isVegetarian) {
    debugger
    Mammal.call(this, legs);
    this.isVegetarian = isVegetarian;
}

/* to see the o/p of Bat object comment the code after below console, as the object 
 changes everytime for every Object through reference*/
////here mamal pops are injected in prototype constructor
console.dir(Bat);

// differnce betwwen p & P in prototype
//here mamal pops are injected in prototype and loose constructor
Bat.prototype = Object.create(Mammal.prototype);

console.dir(Bat)

Bat.prototype.constructor = Bat;

// here constructor is in prototype
console.dir(Bat)

Bat.prototype.fly = function() {
    return 'flying';
}
console.dir(Bat);


//debug starts from below  constructor code
let fruitbat = new Bat(4, true)
console.dir(fruitbat);
console.dir(fruitbat.sleep());
console.dir(fruitbat.fly());