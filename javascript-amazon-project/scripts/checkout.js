import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js'; // runs all the code in cart-oop.js without importing anything
// import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";


loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});