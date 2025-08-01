import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js'; // runs all the code in cart-oop.js without importing anything
// import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";


/*
Promises
- A better way to handle asynchronous code
- Is similar to the done() function 
- Let us wait for some code to finish, before going to the next step
*/
// Promise.all() lets us run multiple promises at the same time and wat for all of them to finish

Promise.all([
    loadProductsFetch(),
    // new Promise((resolve) => { // resolve is a function similar to done that let us control when to go to the next step
    // console.log('start promise'); // this goes to the console first
    // console.log('promise'); // this inside Promise will run immediately
    // loadProducts(() => { // run some async code, wait for it to finish then run resolve. the async code beign loadProducts()
    //     console.log('finished loading'); // this goes to the console third after load products
    //     resolve('value1'); // whatever is given to resolve will be saved in a paramter inside .then
    //   when a promise finishes it can do the next step that is seperate from the rest of the code. It is in .then()
    //     });
    // }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

/*

new Promise((resolve) => { // resolve is a function similar to done that let us control when to go to the next step
    console.log('start promise'); // this goes to the console first
    // console.log('promise'); // this inside Promise will run immediately
    loadProducts(() => { // run some async code, wait for it to finish then run resolve. the async code beign loadProducts()
        console.log('finished loading'); // this goes to the console third after load products
        resolve('value1'); // whatever is given to resolve will be saved in a paramter inside .then
        // when a promise finishes it can do the next step that is seperate from the rest of the code. It is in .then()
    });
}).then((value) => { // value is coming from value1 saved in the previous value. we can now log this to the console
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
    console.log('next step'); // this goes to the console fourth or last
    // loadProducts(() => {
        
    // });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

*/

// loadProducts(() => {
    // loadCart(() => {
    //     renderOrderSummary();
    //     renderPaymentSummary();
    //  })
// });

