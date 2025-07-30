// Functions are values so we can save functions in variables
const function1 = function() { // this is called an anonymous function
    console.log('hello2');
}

function1(); // runs the anonymous function

// hoisting is when we define a function on line 50 but call it on line 5. hoisting doesn't work with functions stored in a variable
// we can save functions to objects like we can save values

const object1 = {
    num: 2,
    fun: function(){
        console.log('hello3'); 
    }
};

object1.fun(); // returns the functions. A function saved in an object is called a method


// we can pass a value into a function so we can pass a function to a function too
function display(param) {
    console.log(param);
}

display(2); 


function run(param) {
    param(); // this code runs the function we passed into it on line 33 and we would log 'hello4' to the console
}

run(function() {
    console.log('hello4');
});

// the function passed to run is called a Callback function

// setTimeout allows us to run a function in the future
setTimeout(function() { // setTimeout takes two params. The first is a function we want to run in the future. The second is how long in milliseconds to wait before running the function passed
    console.log('time out!');
}, 3000); // setTimeout will wait for 3 seconds then run the function that will log 'time out!' to the console
console.log('next line'); // next line will be logged to the console first then 3s later time out will be logged. setTimeout just sets up the function but goes immediately to the next line. It doesn't wait for the time to pass before moving on. this is called Asynchronous Code

// Asynchronous code is when the computer won't wait for a line to finish before going to the next line
// Meanwhile Synchronous code is when the computer will wait for one line to finish before it goes to the next line

//setInterval(); // Another built in function that takes the same two params as setTimeout
setInterval(function() {
    console.log('interval');
}, 3000); // This will run the function EVERY 3s. It is also asynchronous and will go to the next line without waiting for the code to run
console.log('next line 2')


// Another way to loop through arrays
[
    'make dinner',
    'wash car',
    'walk dog'
].forEach(function(value) { // will loop through the array and for each of the values in the array it will save it to the param and run the function
    console.log(value); // loop through the array and save the value to array and run the function. it repeats this for each value in the array
    console.log(index);
}, index); //it takes an optional second argument index that is the position of the value in the array

// foreach is the prefered way to loop through an array

// foreach method does not have continue but we can do the same with return
// if the value is 'walk dog' we will skip it
[
    'make dinner',
    'wash car',
    'walk dog'
].forEach(function(value) { // will loop through the array and for each of the values in the array it will save it to the param and run the function
    if (value === 'walk dog'){
        return; // this return statement will end this function early and it will go on to the next iteration -> the same thing as continue
    }
    console.log(value); // loop through the array and save the value to array and run the function. it repeats this for each value in the array
    console.log(index);
}, index);

// there is not an easy way to use break in a foreach statement so if you will need to use break then it's better to use a regular for loop