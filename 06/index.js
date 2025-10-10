// Math

console.log(Math.PI); // 3.141592653589793

// Math.Round:- rounds to nearest integer.

console.log(Math.round(4.7)); // 5
console.log(Math.round(3.1)); // 3

// Math.Floor():- rounds DOWN to nearest.

console.log(Math.floor(3.1)); // 3
console.log(Math.floor(9.8)); // 9

// Math.ceil():- rounds up to nearest Max

console.log(Math.ceil(9.9)); // 10
console.log(Math.ceil(5.4)); // 6

// Math.trunc():- removes decimals

console.log(Math.trunc(9.111)); // 9
console.log(Math.trunc(9.99)); // 9

// Math.abs():- returns positive values

console.log(Math.abs(-1)); // 1
console.log(Math.abs(9)); // 9

// POW

console.log(Math.pow(2, 2)); // 4

// Math.SQRT

console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(16)); // 4

// MAX AND MIN

console.log(Math.max(9, 8, 7)); // 9
console.log(Math.min(6, 3, 1)); // 1

// RANDOM DICE

const dice = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled a  ${dice}`);
