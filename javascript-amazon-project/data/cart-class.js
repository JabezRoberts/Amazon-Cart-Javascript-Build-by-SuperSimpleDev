// We need to get the cart from local storage instead of using some default value
// export let cart = JSON.parse(localStorage.getItem('cart')); // getItem takes one string - the name of what we saved but local storage only saves string so use JSON.parse to convert it back to an array
// // When we first use the website there might not be a cart in local storage so the above will return null. To fix that give it a default value:
// if (!cart) {
//     cart = [{
//         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//         quantity: 2,
//         deliveryOptionId: '1'
//     }, {
//         productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//         quantity: 1,
//         deliveryOptionId: '2'
//     }];

// }

class Cart{
    cartItems; // same as cartItems = undefined;
    localStorageKey;

    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey; // load cart and business cart from storage
        this.loadFromStorage(); // use this. not cart. because the object generated will not always be called cart. For example we generate businessCart below
        
        // cart and businessCart are objects genereated from the class and are known as instances.
        // Constructors lets us run setup code and put it inside allowing us to code cleaner because we can group everything together

    }
    
    loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)); 
    if (!this.cartItems) {
        this.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
        }];

        }  
    }

    saveToStorage() { // setItem takes the name of what to save and then the data of what to save as a string
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        };
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
    }

    this.saveToStorage();
    }


    removeFromCart(productId) {
    // to delete from cart first create a new Array, loop through the cart, and add each product to the new array, except for this productId
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    this.cartItems = newCart;

    this.saveToStorage();

    }

    updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        };
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
    }
}


const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

// cart.localStorageKey = 'cart-oop';
// businessCart.localStorageKey = 'cart-business'; // load cart and business cart from storage

// // cart and businessCart are objects genereated from the class and are known as instances.
// // Constructors lets us run setup code and put it inside allowing us to code cleaner because we can group everything together

// cart.loadFromStorage();
// businessCart.loadFromStorage();

// We need to get the cart from local storage instead of using some default value
// export let cart = JSON.parse(localStorage.getItem('cart')); // getItem takes one string - the name of what we saved but local storage only saves string so use JSON.parse to convert it back to an array
// // When we first use the website there might not be a cart in local storage so the above will return null. To fix that give it a default value:
// if (!cart) {
//     cart = [{
//         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//         quantity: 2,
//         deliveryOptionId: '1'
//     }, {
//         productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//         quantity: 1,
//         deliveryOptionId: '2'
//     }];

// }

