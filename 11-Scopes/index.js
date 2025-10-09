function rollDice() {
  let dice = Math.trunc(Math.random() * 6 + 1);
  console.log(`You rolled a ${dice}`);
}
rollDice();

// THE ABOVE JUST WANDERED AROUND MY MIND SO RANDOM ASS CODE.

///////////////////// SCOPE ////////////////////
// Scope is a variable accessible in your code.

// GLOBAL SCOPES:- Variables declared globally (outside any block or function)

let x = 1; // Global

// Local Scopes:- message declared inside the function

function text() {
  let message = "Hello from inside";
  console.log(message);
}
text();

// Block Scope:- from es6 variables declared with let and const => block scope . var is => function scope

{
  let x = 10;
  const y = 20;
  var z = 30; // var is function-scoped, not block-scoped
}

console.log(x); // ❌ undefined
console.log(y); // ❌ undefined
console.log(z); // ✅ works (var leaks out)
