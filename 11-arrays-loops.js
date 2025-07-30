// Arrays
const myArray = [10, 20, 30];
myArray[0]; // value = 10
myArray[0] = 99; // Array becomes [99, 20, 30]

// Arrays can hold any type of value --> Strings, numbers, booleans, objects, arrays, etc

console.log(typeof [1,2]); // returns object because an array is a type of object
console.log(Array.isArray([1,3])); // returns true

myArray.push(100); // adds 100 to the end of myArray
myArray.splice(0, 2); // removes a value from an array. first number is the index you want to remove, second number is how many values to remove
// this will remove 2 values starting at index 0  


// LOOPS

let = 1;

while (i < 5) {
    console.log(i);
    i++;
}

for (let i = 1; i < 5; i++) {
    console.log(i);
}

// Generate random numbers until one that's at least 0.5
let randomNumber = 0;

while (randomNumber < 0.5) {
    randomNumber = Math.random()
}
console.log(randomNumber)


// Loop through an array
const todoList1 = ['make dinner', 'wash dishes', 'watch youtube'];

for (let i = 0; i < todoList1.length; i++) {
    console.log(todoList1[i]);
}


// ORR: they do the same thing
for (let i = 0; i <= todoList1.length - 1; i++) {
    const value = todoList1[i];
    console.log(value);
}


// Accumulator Pattern
const nums = [1, 23, 45, 66, 7658]

const total = 0; // Accumulator variable

for (let i = 0; i < nums.length; i++) {
    total += nums[i]; // Accumulator pattern
    console.log(total);
}

console.log(total);


// Create a copy of the array where each number is doubled
const doubled = [];

for (let i = 0; i < nums.length; i++) {
    doubled.push(nums[i] * 2);
    console.log(doubled);
}
console.log(doubled);


// Arrays are references, just as objects are references
const array1 = [2,4,5]; // the variable array1 doesn't actually hold this value. It just holds a reference to the location of this array in memory

const array2 = array1; // Therefore, creating a copy of array1 doesn't copy array1 but holds a reference to the location of array1's reference
// So
array2.push(57);
console.log(array1);
console.log(array2);
// both would returns [2, 4, 5, 57] as both would be modified because the reference updated the actual array

// To avoid this create a copy of the array using slice()
// Sooo
const array3 = array1.slice(); // Creates a copy of the actual array so now array3 points to a different array than array1 and array2


// DESTRUCTURING
const array4 = [1, 2, 4, 5];
// Get the first and second value out of the array
const [ firstValue, secondValue ] = [1, 2, 4, 5]; // stores the first and second value in firstValue and secondValue


// More about loops
// break -> exit loop early
// continue -> skip one iteration of the loop

for (let i = 1; i <= 10; i++) {
    // skip checking if i = 3
    if (i === 3) {
        continue;
    }
    // stop loop early when i = 8
    console.log(i);
    if (i === 8) {
        break;
    }
}


let i = 1;
while (i <= 10) {
    if (i % 3 === 0) {
        i++;
        continue; // in a while loop if you use continue always do the increment i++ manually as it will skip the increment you see below console.log(i)
    }
    console.log(i);
    i++;
}


// How to use loops with functions
function doubleArray(nums) {
    const doubled = [];

    for (let i = 0; i < nums.length; i++) {
        if (num[i] === 0) {
            return doubled; // or we can say break. this ends the function if we come across a value of 0
        }
        doubled.push(nums[i] * 2);
        console.log(doubled);
    }
    return doubled
}

console.log(doubleArray([1, 18, 89]));
console.log(doubleArray([45, 5663, 19374585839]));