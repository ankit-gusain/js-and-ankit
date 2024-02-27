const cart = ["shirt", "pant", "kurta", "shoes"];

createOrder(cart)

    .then(function (orderId) {
        console.log("order id: " + orderId);
        return orderId;
    })

    .then(function (orderId) {
        return proceedToPayment(orderId);
    })

    .then(function (paymentInfo) {
        console.log("payment information: " + paymentInfo);
        return paymentInfo;
    })

    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })

    .then(function (walletBalance) {
        
    })

