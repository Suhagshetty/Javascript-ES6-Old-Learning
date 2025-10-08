const myFavNumbers = [1, 2, 3, 4, 5];
const myFavNames = ["suhag", "shetty"];
const combo = ["suhag", 0, true];

// OTHER WAY OF DECLARING AN ARRAY

const arraysiS = new Array(1, 2, 3);
console.log(arraysiS);

// ARRAY METHODS

const fruits = ["orange", "banana", "apple", "grape"];
// console.log(fruits.length); // 4

// PUSH :- adds at the end of the element
fruits.push("apricot");
console.log(fruits);
// [ 'orange', 'banana', 'apple', 'grape', 'apricot' ]

// POP:- REMOVES AT THE END
fruits.pop();
console.log(fruits);
// [ 'orange', 'banana', 'apple', 'grape' ]

// UNSHIFT():- adds the element at the start

fruits.unshift("litchi");
console.log(fruits);
//[ 'litchi', 'orange', 'banana', 'apple', 'grape' ]

// SHIFT:- removes the start
fruits.shift();
console.log(fruits);
// [ 'orange', 'banana', 'apple', 'grape' ]

// INCLUDES

console.log(fruits.includes("orange")); // TRUE
console.log(fruits.includes("Orange")); // FALSE

// INDEX OF

console.log(fruits.indexOf("apple")); // 2

// JOIN() combines elemens into string

console.log(fruits.join("-"));
// orange-banana-apple-grape

///////////// SLICE ////////////////// Returns a new array

const sliced = fruits.slice(0, 3);
console.log(sliced);
// [ 'orange', 'banana', 'apple' ]

/////////// SPLICE //////////// ADDS/REMOVES elements modifies the original array

fruits.splice(1, 1, "grape");
console.log(fruits);
// [ 'orange', 'grape', 'apple', 'grape' ]

/// MAP():-- created a new Array by applying function to each element

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);
// [ 1, 4, 9, 16 ]

// FILTER()- createsd a new array with element which passes a condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// [ 2, 4 ]

const NumbersAre = [1, 2, 3, 4, 5, 5, 6, 6, 9];
const answerOdd = NumbersAre.filter((num) => num % 3 === 0);
console.log(answerOdd);

//  FIND()- returns first element that matches a condition

const users = [
  { id: 1, name: "Suhag" },
  { id: 2, name: "Hitesh" },
];
const findingUser = users.find((user) => user.id == 2);
console.log(findingUser);
// { id: 2, name: 'Hitesh' }

// SORT:-modifies thhe og

const num = [3, 2, 1, 6, 5];
num.sort();
console.log(num);
// [ 1, 2, 3, 5, 6 ] THIS SORTS ARRAYS AS STRINGS

num.sort((a, b) => a - b);
console.log(num);
// [ 1, 2, 3, 5, 6 ]

// REVEREDE

const rev = [1, 2, 3, 4, 5, 6];
rev.reverse();
console.log(rev);
// [ 6, 5, 4, 3, 2, 1 ]

// CONCAT

const a = [1, 2];
const b = [3, 4];
console.log(a.concat(b));
// [ 1, 2, 3, 4 ]

// SPREAD: copies an array performs shallow copy

const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [ 1, 2, 3 ]
console.log(arr === copy); // false (diffenet arrays)

// combine arrays

const fruitsAre = ["apple", "banana"];
const moreFruits = ["orange", "grape"];
console.log(...fruits, ...moreFruits);

// adding elements easily

const numbersre = [1, 2, 4];
const mynUM = [3, ...numbersre];
console.log(mynUM);
// [ 3, 1, 2, 4 ]

// SPREAD WITH STRINGS

const StringTest = "SUHAG";
console.log(...StringTest);
// S U H A G
