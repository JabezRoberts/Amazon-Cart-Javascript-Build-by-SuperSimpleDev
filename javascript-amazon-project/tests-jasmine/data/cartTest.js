import { addToCart, cart, loadFromStorage } from "../../data/cart.js";


describe('test suite: addToCart', () => {
    it('adds an existing product to the cart', () => {
       spyOn(localStorage, 'setItem');

       spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        }); 
        loadFromStorage();
        
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1); 

        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    
    });

    it('adds a new product to the cart', () => {
        // to not let test affect local storage
        spyOn(localStorage, 'setItem');

        //method name is getItem from cart.js
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        }); 
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1); // flaky test here - a test that sometimes pass and sometimes fail. This is because we intialize our cart from local storage that is unpredictable or add default items to our cart so the behaviour is unpredictable making this a flaky test
        //  To solve this we use Mocks. Mocks let us replace a method with a fake version and let us do whatever we want
        // We can use a mock to create a fake version of getId that does anything we want like return an empty array --> spyOn
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});