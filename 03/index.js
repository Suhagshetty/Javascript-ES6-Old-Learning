"use strict";

let score = "33";
let scoreNumber = Number(score);
console.log(typeof scoreNumber); // Number

// "33" => 33 , "33abc"=>NaN , true=>1 false=>0

const isLoggedIn = "suhag";
const BooleanCheck = Boolean(isLoggedIn);
console.log(BooleanCheck); // True

const isSuhag = "";
const Check = Boolean(isSuhag);
console.log(Check); // False

let suhagFav = 43;
let suhagStringNumber = String(suhagFav);
console.log(typeof suhagStringNumber); // String

// MATH OPERATIONS

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 3);
console.log(2 % 2);

// Conversions

console.log(1 + 1 + "3"); // 23 // string at the end means the prev values will undergo thier noraml calcs.
console.log("2" + 9 + 0); // 290:- string followerd by nummber will be concatenated
console.log("3" + (3 + 4)); //() value here will undergo operation first.

// PREFIX
let a = 1;
a++;
console.log(a);

// POSTFIX
let b = 1;
++b;
console.log(b);
