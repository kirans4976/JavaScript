/*Inheritance in JavaScript is prototype-based.
Every constructor has a property called prototype*/

/*Object is the master constructor in JavaScript, represents with 'O'
Directly or indirectly, every object is created by using Object (master object). 
Since, it is available in the global space, you can access it directly. 
If you console.dir(Object), you can view all methods that are available to Object.
One of the methods is create(). It enables prototypal inheritance in JavaScript.*/

console.dir(Object);

/*The Object.create method takes two arguments. First argument must be either an object or null. 
The second argument is optional and used to set properties. These properties are set in object’s prototype.*/

//Object.create(prototypeObject, propertiesObject); // syntax

const myObject = Object.create(Object.prototype);
console.dir(myObject);

/*  you can call methods on myObject that are available in Object’s prototype. If you create an object literal by using const myLiteral = {};,
it possesses the same __proto__ because internally every object’s __proto__ is set to Object.prototype*/

//To create an object without setting its __proto__ reference to Object.prototype, pass null as an argument. 

const myObject2 = Object.create(null);
console.dir(myObject2);


/* The Object.create() method also creates objects from constructors. It is similar to using the new keyword. 
The only difference is that by using the new keyword, you can run the constructor. 
Hence, it will set the initial properties in the constructor. Whereas, 
the Object.create() method doesn’t run the constructor and hence the initial properties are not set. */


const Car = function(color) {
    this.color = color;
};
Car.prototype.getColor = function() {
    return this.color;
}

let car1 = new Car('red');
let car2 = Object.create(Car.prototype);

console.dir(car1);
console.dir(car2);
console.log('car1', car1);
console.log('car2: ', car2);

/*The main use of the Object.create() method is to extend the constructor. 
This means that you can inherit methods from a constructor’s prototype properties to other constructors. 
To extend a constructor, set a prototype reference of one object to another by using the Object.create() method.
Note: Only the constructor’s prototype is inherited and not the constructor. */

const Car11 = function(color) {
    this.color = color;
};

Car11.prototype.getColor = function() {
    return this.color;
}

const ToyCar = function() {};

ToyCar.prototype = Object.create(Car11.prototype);

const legoCar = new ToyCar();

console.log(legoCar);

/* In the above example, ToyCar’s __proto__ is set to Car and Car’s __proto__ is set to Object.
 The isPrototypeOf method verifies if legoCar, which is originally created by using the ToyCar constructor, 
 is a prototype of ToyCar, Car and Object. The instanceof operator also performs the similar task. */

// Using the isPrototypeOf method
console.log('ToyCar.prototype.isPrototypeOf(legoCar)', ToyCar.prototype.isPrototypeOf(legoCar)); //true
console.log('Car11.prototype.isPrototypeOf(legoCar)', Car11.prototype.isPrototypeOf(legoCar)); //true
console.log('Object.prototype.isPrototypeOf(legoCar)', Object.prototype.isPrototypeOf(legoCar)); //true

// Using the instanceof operator
console.log('legoCar instanceof ToyCar', legoCar instanceof ToyCar); //true
console.log('legoCar instanceof Car11', legoCar instanceof Car11); //true
console.log('legoCar instanceof Object', legoCar instanceof Object); //true

/* In the classical inheritance, you can create a subClass from a superClass. 
The subClass inherits all methods of the superClass. In JavaScript, a subConstructor inherits all methods from a superConstructor by using the Object.create method. 
Contrary to the classical inheritance, where methods of superClass are copied to subClass, 
JavaScript uses a prototype reference to access methods from the superConstructor. */