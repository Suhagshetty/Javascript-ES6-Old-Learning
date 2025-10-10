// CONDITIONAL STATEMENTS:- Control structures decide how your code flows.

const age = 18;
if (age >= 18) {
  console.log("You can drink some Wine");
} else {
  console.log("Just stick with water nigga!");
}

// MARKS CHECK

const marks = 60;
if (marks <= 35) {
  console.log("FAIL");
} else if (marks <= 60) {
  console.log("Not Bad");
} else {
  console.log("Your Suhag Now");
}

// TERNARY OPERATOR :- introduced in es6 better version of if else statement

let ageIs = 20;
let status = age >= 18 ? "Adult" : "Noob";
console.log(status);

const wineDrinkerAge = 20;
let checkId = wineDrinkerAge >= 18 ? "You can drink wine" : " STFU";
console.log(checkId);

//  SWITCH:-

let dayOfTheWeek = 12;
switch (dayOfTheWeek) {
  case 1:
    console.log("Plan for the week");
    break;
  case 2:
    console.log("Execute");
    break;
  case 3:
    console.log("Work");
    break;
  default:
    console.log("Other ");
}

// FAV NUMBER USING SWITCH:-

// const favNumber = Number(prompt("Enter your fav Number"));
// if (favNumber) {
//   switch (favNumber) {
//     case 22:
//       console.log("WOOO");
//       break;
//     case 23:
//       console.log("Nope");
//       break;
//     default:
//       console.log("NAAAH");
//   }
//}

// OPERATIONS
// && here both condition must be true if any one of them is false its a false
// || any one true would be fine
// ! inverts the value

const temperature = 125;
if (temperature <= 15 && temperature >= 0) {
  console.log("OKAY TEMP");
} else {
  console.log("NOpe");
}

console.log(!true); // FALSE

const ageForDrink = 20;
if (ageForDrink >= 21 || ageForDrink === 20) {
  console.log("CHECK");
} else {
  console.log("NO");
}
// CHECK

// FOR LOOP:- repeats code for given amount of iteration

for (let i = 0; i <= 10; i++) {
  console.log(`${i}`);
}

// sum

let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// SORTING
let numbers = [5, 2, 8, 1, 4];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      // Swap numbers[j] and numbers[j+1]
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers); // [1, 2, 4, 5, 8]
