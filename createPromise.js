const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // return order Id
//console.log(promise) // output pending status
promise.then(function (orderId) {
  console.log(orderId);
  //proceedPayment(orderId)
}).catch(function (err) {
  console.error(err.message);
});

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("invalid cart");
      reject(err);
    }
    const orderId = "1234"; // DB call to get the order details
    if (orderId) {
      resolve(orderId);
    }
  });
}

function validateCart(cart) {
  return cart.length > 0; //or just put true to reject just return false here we check whether the cart is empty or has data
}
