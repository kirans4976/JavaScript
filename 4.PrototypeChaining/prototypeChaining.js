var car = function() {};

car.prototype = {
    print() {
        return 'im a car '
    }
};

const ToyCar = function() {};

ToyCar.prototype = Object.create(car.prototype);

ToyCar.prototype.print = function() {
    return 'Im a toy car '
};

const ToyTransformer = function() {};

ToyTransformer.prototype = Object.create(ToyCar.prototype);

ToyTransformer.prototype.print = function() {
    return 'im a toy transformer '
};

const toyata = new car();

const legocar = new ToyCar();

const optimusPrime = new ToyTransformer();

console.log(toyata.print());

console.log(legocar.print());


console.log(optimusPrime.print());

/* here optimusPrime has proto of from inherited member car, 
if we commented print() in toytransformer then  optimusPrime.print() will print i'm a toy car from inherited member*/