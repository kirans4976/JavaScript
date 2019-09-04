//Every constructor function has a property called prototype. You can add properties and methods to it

let Car = function (color) {
    this.color = color;
};

Car.prototype.getColor = function () {
    return this.color;
};

let redCar = new Car('red');

console.dir(redCar);
console.log(redCar);

//If you expand the Car constructor, the prototype property of the constructor is displayed. If you further expand the prototype property, the getColor method is displayed.
//You can think of __proto__ as the creator of redCar
//JavaScript will look inside the redCar object. If the method doesn’t exist in the object, it will look for the method in the object’s creator, which is __proto__. It will find it and execute it.

//************************************************************************************************************************************************************************************
//So, let’s analyze a little more and discover how is __proto__ created. If you further expand __proto__, you will see its creator, which is the master __proto__. This is basically a master object called Object (the letter ‘O’ is capitalized). Every object in JavaScript is created from Object. It also has some methods. One of the methods is toString(). 
//When you call this method on redCar, JavaScript will first search for this method in the redCar object. If it can’t find it there, it keeps searching for the method all the way to the end of the prototype chain.



//******************************* Overwriting object Methpds  ********************************************************************************************************


Object.prototype.toString = function(){
    return `color:${this.color}`;
};


//There are pros and cons of using prototype inheritance. The best part is, the inheritance makes objects lighter. The drawback is that every time you call a method that is not a part of the object, it looks for the method up the prototype chain. 
//Hence, it makes it a little slower. The workaround is, if you are going to call this method frequently, store it in a variable to avoid the lookup.

let toString = Object.toString;
console.dir(redCar.toString());