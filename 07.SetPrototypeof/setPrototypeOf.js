/* we can use constructors & also object literals for building objects 
for using object literals before es15 it was done manually by copying one obj methods to another
es15 introduced couple of methods >> method.setPrototypeOf() & object.assigned()*/


/*In JavaScript, function constructors can be extended by using the Object.create() method. 
  This method lets you set prototype of one object to another object.*/

//Constructor2.prototype = Object.create(Constructor1.prototype);

//Object.setPrototypeOf(targetObj, sourceObj); //syntax

let toyota = {
    drive() {
        return 'driving toyota';
    }
}

let camry = {
    wifi() {
        return 'using wifi';
    }
}

// Set toyota's __proto__ to camry's  __proto__'s  __proto__
Object.setPrototypeOf(camry, toyota);

console.dir(camry); //prints the camry object
console.log(camry.wifi()); // using wifi
console.log(camry.drive()); // driving toyota