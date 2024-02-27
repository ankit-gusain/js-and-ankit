const cart = ["pant", "shirt", "kurta"];

const promise = createOrder(cart);

promise.then(function (orderId) {
    console.log(orderId)

    //ProceedToPayment(orderId);
})

    .catch(function (err) {
        console.log(err.message);
    });


//creating a promise:
function createOrder() {
    const pr = new Promise(function (resolve, reject) {

        //RESOLVE and REJECT are 2 functions by js
        //take cart item and create an order
        //call to db 
        //validate cart
        //get order id and return as succcess or incase of failure return 

        if (!validateCart(cart)) {
            const err = new Error("message: invalid cart");
            reject(err);
        }

        //logic for creting order
        const orderId = "1234";
        if (orderId) {
            resolve(orderId);
        }
    });
    return pr;
}

function validateCart(cart) {
    return false;
}