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
// [
//     'make dinner',
//     'wash car',
//     'walk dog'
// ].forEach(function(value, index) { // will loop through the array and for each of the values in the array it will save it to the param and run the function
//     if (value === 'walk dog'){
//         return; // this return statement will end this function early and it will go on to the next iteration -> the same thing as continue
//     }
//     console.log(value); // loop through the array and save the value to array and run the function. it repeats this for each value in the array
//     console.log(index);
// }, index);

// Adding arrow fxn
[
    'make dinner',
    'wash car',
    'walk dog'
].forEach((value, index) => { // will loop through the array and for each of the values in the array it will save it to the param and run the function
    if (value === 'walk dog'){
        return; // this return statement will end this function early and it will go on to the next iteration -> the same thing as continue
    }
    console.log(value); // loop through the array and save the value to array and run the function. it repeats this for each value in the array
    console.log(index);
}, index);

// there is not an easy way to use break in a foreach statement so if you will need to use break then it's better to use a regular for loop

// Arrow functions
const arrowFunction = (param1, param2) => {
    console.log('hello');
    return param1;
};

// This is an arrow function and works the same as regular functions
// they also have shortcuts. if the arrow fxn only has one param you can omit the ()
const oneParam = param => {
    console.log(param + 1);
}
oneParam(2); // output 3

// when an arrow fxn only has one line you can write it like this
const oneLine = () => {
    return 2 + 3;
};

// This becomes 
const oneLine1 = () => 2 + 3;
console.log(oneLine1);
console.log(oneLine);


// use arrow fxns in an object
const obj2 = {
    method: () => {

    },
    method () { // shorthand method syntax

    }
}


// Array filter and Array map
[1, -3, 4]; // use filter to remove the negative numbers

[1, -3, 4].filter((value, index) => { // works like foreach. will take the first value, save it to value then run the function. then the second then the third. the only difference is this inner function will return a value 
    // how this works is that it will create a new array then if the inner function returns true it will put the value in the new array and if it returns false it will not put it in the new array. So let's use this to solve the problem. This becomes
    /*
    if (value >= 0) {
        return true;
    } else {
        return false;
    }
    */
    return value >= 0; // does the same as the if statement above
});


// Now for Array map
[1, 2, 5].map((value, index) => { // works like foreach and filter where it takes the value from the array, save it to value, then run the fxn
    // what map does is that it creates a new array and whatever we return will be added to the new array
    // therefore map will transform an array into another array based on the return value
    return value * 2;
});


[1, 2, 5].map(value => value * 2 );

console.log([1, 2, 5].map(value => value * 2 ));

console.log([1, 2, 5].map((value, index) => { // works like foreach and filter where it takes the value from the array, save it to value, then run the fxn
    // what map does is that it creates a new array and whatever we return will be added to the new array
    // therefore map will transform an array into another array based on the return value
    return value * 2;
}));

console.log([1, -3, 4].filter((value, index) => { // works like foreach. will take the first value, save it to value then run the function. then the second then the third. the only difference is this inner function will return a value 
    // how this works is that it will create a new array then if the inner function returns true it will put the value in the new array and if it returns false it will not put it in the new array. So let's use this to solve the problem. This becomes
    /*
    if (value >= 0) {
        return true;
    } else {
        return false;
    }
    */
    return value >= 0; // does the same as the if statement above
}));

// Closure: if a function has access to a value it will always have access to that value. The value gets packaged together (enclosed) with the function