let promiseToCleanTheroom = new Promise(function(resolve, reject) {
    // clean the room let 
    isClean = true; // change variable to true/false for test the promise
    if (isClean) {
        resolve('Clean');
    } else {
        reject('not clean');
    }
});
promiseToCleanTheroom.then(function(fromResolve) {
    console.log('the room is' + fromResolve)
}).catch(function(fromReject) {
    console.log('the room is' + fromReject)
});

//****************************************************************
let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('clean the room');
    });

};

let RemoveGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' Remove the garbage');
    });

};

let winIceCream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' Won Icecream');
    });

};

/* dependencies for promises. it becomes difficult 
 if we callbacks  */
cleanRoom().then(function(result) {
    return RemoveGarbage(result);
}).then(function(result) {
    return winIceCream(result);
}).then(function(result) {
    console.log('finished ' + result)
});

// for executing all promises at a time and do some thing after executing all
Promise.all([cleanRoom(), RemoveGarbage(), winIceCream()]).then(function() {
    console.log('all finished');
});

// for executing any one of the promise and  u do something after executing any 1 of them
Promise.race([cleanRoom(), RemoveGarbage(), winIceCream()]).then(function() {
    console.log('any one of them is finished');
});