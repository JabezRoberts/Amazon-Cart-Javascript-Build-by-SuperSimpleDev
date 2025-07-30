document.body.innerHTML = 'hello'; // Set's the body of the html doc or all the content on the page to 'hello'
document.title = 'Good job!';  // Set the title to 'Good job!'

// When an html element is inside javascript the html element is converted to a javascript object
document.body; // Returns all the content in the body of the html doc
console.log(typeof document.body); // Returns object as this is now a js object

document.body.innerHTML; // Returns all the html of the document

document.querySelector(); // This let's us get any element from the page and put it inside Javascript
document.querySelector('button'); // Get's the first button element from our page and put it inside our Javascript
document.querySelector('body'); // Get's the first body element from our page and put it inside our Javascript

// Every element has a property called innerHTML that let's us control the HTML inside the element (between the opening and closing tags)
document.querySelector('button').innerHTML; // returns the html inside the button (the text)
document.querySelector('button').innerHTML = 'Changed'; // Changes the button text to 'Changed'
document.querySelector('button')
    .innerHTML = 'Changed'; // same thign as above

// To target a second button on the page add for example class="js-button" the
document.querySelector('.js-button'); // will look for the element with the class js-button  --> called a Class Selector. 
// Anything used in CSS can be used here

const buttonElement = document.querySelector('.js-button'); 
console.log(buttonElement); // Got the html element and saved to this variable