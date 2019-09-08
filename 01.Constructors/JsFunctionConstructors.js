
//'use strict'
//General function(a regular function takes arguments. It performs an action within the body of the function and returns the result)
let add = function(number1, number2) {
 return number1 + number2;
};

let sum = add(1, 2);

console.log(sum);


//constructor( it returns a new object with the property that is passed as an argument.)
let Car = function(color) {
    this.color = color;
   };
   
   let redCar = new Car('red');

   

   //constructor calling without using new 
   let Car1 = function(color) {
    this.color = color;
  };
  
  let redCar1 = Car1('red');

  console.log(window.color); //In this case, this.color = color will create a new property color in the global space.


  //*******************************************************************************

  //You can also use the new.target to throw a customized error message..
  let Car2 = function(color) {
    if (!new.target) throw 'Car() must be called with new';
    this.color = color;
  };
  
  //let redCar2 =  Car2('red');
  
  //Accessing with new key word

  redCar2 = new Car2('red');
  console.log(redCar2.color); //In JavaScript, all object properties are public, 

  //*******************************************************************************

  //private properties: However, you can call a getter or have a getter method like getColor to access it and use closure.

  let Car4 = function(_color) {
    this.setColor = function(color){
      _color = color;
    }
    this.getColor = function() {
      return _color;
    };
  };
  
  let redCar4 = new Car4('red');
  
  console.log(redCar4.getColor());

//Here _color is a private variable that cannot be accessed by the object using redCar._color.
//Since it is a closure, the methods have access to them.

  //*******************************************************************************