/* js is a non blocking excution i.e.., it continous to executes not  wait for some code
there are times to wait for code to execute, hence we r using async await

-----> async function always return promise  

----->await function always must be in async function

The functionality achieved using async functions can be recreated by 
combining promises with generators, but async functions give us what we need without any extra boilerplate code.*/

//************************************************Ex1**********************************************************************

/* if we comment the async func and uncommnet the normal function, we the end msg is printed first and 
 the promise msg is printed next*/

function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('hii');
        }, 2000);
    });
}

async function msg1() {
    const msg1 = await scaryClown();
    console.log('Message:', msg1);
    console.log('the end')
}

// function msg1() {
//     const msg1 = scaryClown();
//     msg1.then(x => console.log('Message:' + x));
//     console.log('the end')
// }

msg1(); // Message: 🤡 <-- after 2 seconds


//*************************ErrorHandling*************************************************

function caserUpper(val) {
    return new Promise((resolve, reject) => {
        resolve(val.toUpperCase());
    });
}


// Below catch function will get  both customized & js  error in console window
/*async function msg2(x) {
    const msg2 = await caserUpper(x);
    console.log(msg2);
}
msg2().catch(x => console.log('error1:' + x));*/


//Below catch function will get  both customized  error in console window
async function msg2(x) {
    try {
        const msg2 = await caserUpper(x);
        console.log(msg2);
    } catch (err) {
        console.log('Ohh no:', err.message);
    }

}

msg2('Hello'); // HELLO
msg2(34); // Ohh no: val.toUpperCase is not a function