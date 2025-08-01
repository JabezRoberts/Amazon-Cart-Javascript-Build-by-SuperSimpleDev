// The main idea of Javascript:
// 1. save the data
// 2. Generate the HTML
// 3. Make it interactive

// SAVE THE DATA
// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     priceCents: 1090, // save price in cents to avoid issues with JS
// }, {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: {
//         stars: 4,
//         count: 127
//     },
//     priceCents: 2095, // save price in cents to avoid issues with JS
// }, {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 4.5,
//         count: 56
//     },
//     priceCents: 799,
// }, {
//     image: 'images/products/black-2-slot-toaster.jpg',
//     name: '2 Slot Toaster - Black',
//     rating: {
//         stars: 5,
//         count: 2197
//     },
//     priceCents: 1899,
// }]; // ensure each product has the same structure (variables) so that our code can handle all of them the same

import { cart, addToCart } from "../data/cart.js";
import { products, loadProducts } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";


loadProducts(renderProductsGrid); // this makes us add async to our website so the website doesn't load before the response for the products request is received and the products load otherwise our page would be blank because the program finished executing without waiting for our products to load

function renderProductsGrid() {
  let productsHTML = ''; ///for adding html to the website step 3
  // NOW GENERATE THE HTML WITH THIS
  /// Loop through this array

  products.forEach((product) => {
      productsHTML += `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()} 

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>
      `;
  });
  // NOW COMBINE HTML INTO ONE STRING AND PUT IT ON THE WEB PAGE

  // console.log(productsHTML); // all our html is  now combined. now to put it on the web page using the DOM. We first need to get the element from the html page into our JS then replace all the html on the web page with the content above from our Javascript

  document.querySelector('.js-products-grid') //gonna look for a class js-products-grid, take this element and put it in our Javascript
      .innerHTML = productsHTML; 

  // NOW MAKE IT INTERACTIVE
  // Add to cart



  function updateCartQuantity() {
      // CALCULATE THE QUANTITY OF THE CART
      let cartQuantity = 0;

      cart.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
      });
      // now add this to the cart icon in the header on the page
      document.querySelector('.js-cart-quantity')
          .innerHTML = cartQuantity;
  }

  document.querySelectorAll('.js-add-to-cart')
      .forEach((button) => {
          button.addEventListener('click', () => {
              // we could push the product object to cart with name and quantity but how will we know will product should be added? 
              // For this we will use the Data Attribute HTML feature
              // A Data Attribute that allows us to attach any information to an HTML element
              // Data Attribute syntax -> an html attribute that needs to start with 'data-' then any name. It has a name and value.
              const productId = button.dataset.productId; // dataset properties gives all data attributes of the element
              
              addToCart(productId);

              updateCartQuantity();
          });
      });
}

    // Create a module
    // Step 1 - create a file
    // Step 2 -  Don't load the file with the script tag <script></script>


    // How to get a variable out of a file
    // 1. att type="module" attribute
    // 2. export
    // 3. import