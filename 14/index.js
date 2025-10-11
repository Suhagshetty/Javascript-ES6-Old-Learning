// Map Filter Reduce:- modern js concepts.

//////// FOR EACH /////////
let fruits = ["apple", "banana", "mango"];
fruits.forEach((fruits) => console.log(fruits));

// doubling numbers
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((numbers) => console.log(numbers * 2));

// users
let users = ["ALICE", "BOB", "MARLEY"];
users.forEach((users) => console.log(`Hello ${users}`));
// Use when you just want to do something with each item (not build a new array).

////////// MAP ////////////

let nums = [1, 2, 3, 4, 5];
let doubled = nums.map((nums) => nums * 2);
console.log(doubled);

let names = ["suhag", "shetty"];
let toUpperCase = names.map((names) => names.toUpperCase());
console.log(toUpperCase);

// EXTRACTING PRICES ONLY

let products = [
  { name: "Suhag", price: 22 },
  { name: "Shetty", price: 33 },
];
let prices = products.map((item) => item.price);
console.log(prices); // Output: [22, 33]

///////// FILTER /////////:- filters based on a specific condition

let num1 = [1, 2, 3, 4, 5];
let evens = num1.filter((even) => even % 2 == 0);
console.log(evens);

let ages = [12, 18, 25, 15, 30];
let ageAdult = ages.filter((age) => age >= 18);
console.log(ageAdult);

let userSS = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];

let activeUsers = userSS.filter((userSS) => userSS.active);

console.log(activeUsers);

// REDUCE:- Combine all elements into one single value

let price = [100, 200, 300];

// Add GST (10%) and find total
let total = price
  .map((p) => p * 1.1) // add GST
  .reduce((sum, p) => sum + p, 0); // total
console.log(total); // 660
