

const items = ["ball", "bat", "needle", "scissors", "rock", "paper"];

createOrder(items)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })

    .then(function (orderId) {
        return proceedToPayment(orderId);       //imp never forget to return this will return a promise 
    })

    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })

    .catch(function (err) {
        console.log(err.message);
    });

//note :
//In promise chaining we attach a failure callback function using catch to promise obj.
//Placing a CATCH above any of the THEN will result in reading error above that CATCH and the context below the CATCH will remain unaffected by the eartler CATCH
//What ever we returnin one part is accesible for wthe next part.
//CATCH handles all the errors above its declaration.
//RETURNing promise is important if we are not using the call back functions
//

function validCart(items) {
    return true;
}

function createOrder(items) {
    const promiseOne = new Promise(function (resolve, reject) {
        if (!validCart(items)) {
            const err = new Error("Message: invalid cart user");
            reject(err);
            return; // Make sure to return after rejecting the promise
        }
        const orderId = 123123;

        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 1000);
        }
    });
    return promiseOne;  //returning promise
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("payment successful")
    });
}
