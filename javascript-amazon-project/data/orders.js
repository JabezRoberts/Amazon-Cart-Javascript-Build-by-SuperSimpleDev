export const orders = JSON.parse(localStorage.getItem('orders')) || []; // if there is nothing stored in localStorage use a []

export function addOrder(order) {
    orders.unshift(order); // add orders to front of the array. Push adds them to the back
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}