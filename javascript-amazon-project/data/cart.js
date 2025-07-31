// We need to get the cart from local storage instead of using some default value
export let cart = JSON.parse(localStorage.getItem('cart')); // getItem takes one string - the name of what we saved but local storage only saves string so use JSON.parse to convert it back to an array
// When we first use the website there might not be a cart in local storage so the above will return null. To fix that give it a default value:
if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
    }];

}


// function to save cart to local storage
export function saveToStorage() { // setItem takes the name of what to save and then the data of what to save as a string
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        };
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
    }
    saveToStorage();
}

export function removeFromCart(productId) {
    // to delete from cart first create a new Array, loop through the cart, and add each product to the new array, except for this productId
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}