// A function is a block of code that performs a specific task and can be reused anywhere in your program.

function greet() {
  console.log("Hello Suhag");
}
greet(); // Hello Suhag
greet(); // Hello Suhag

// Adding 2 numbers

function add(x, y) {
  return x + y;
}
console.log(add(2, 2)); // 4

// Function expression

const mulitply = function (a, b) {
  return a * b;
};
console.log(mulitply(3, 4)); // 12

// SQUARE ROOT

const sqrt = function (c) {
  return Math.sqrt(c);
};
console.log(sqrt(2));

///////// PASSING OBJECTS WITH FUNCTIONS /////////

const user = {
  name: "Suhag",
  age: 22,
};
function greets(person) {
  console.log(`Hello ${person.name}`);
}
greets(user);

// ARRAYS OBJECTS FUNCTIONS
const users = [
  { name: "Suhag", age: 22 },
  { name: "Shetty", age: 33 },
];
function getnAME(lists) {
  return lists.map((name) => name.name);
}
console.log(getnAME(users));
