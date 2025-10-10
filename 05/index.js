// Length

const name = "suhag";
console.log(name.length); // 5

// toUpperCase and toLowerCase

const checkUpper = "suhag";
console.log(checkUpper.toUpperCase()); // SUHAG
const checkLower = "SHETTY";
console.log(checkLower.toLowerCase()); // shetty

// trim() , trimStart(), trimEnd()

const intro = "    Hello my name is Suhag  ";
console.log(intro.trim()); // trims the whitespace
console.log(intro.trimStart()); //trims white spaces from the start
console.log(intro.trimEnd()); // trims from the end

// Includes

const suhagIntro = "hello i am suhag";
console.log(suhagIntro.includes("suhag")); // true
console.log(suhagIntro.includes("shetty")); // false
console.log(suhagIntro.includes("Suhag")); // FALSE

// STARTS AND ENDS WITH

const employee = "Frontend development";
console.log(employee.startsWith("Frontend")); // TRUE
console.log(employee.endsWith("development")); // FALSE
console.log(employee.startsWith("frontend")); // FALSE

// INDEX OF AND LAST INDEXOF

const indexCheck = "Hello";
console.log(indexCheck.indexOf("H")); // 0
console.log(indexCheck.indexOf("S")); // -1
console.log(indexCheck.lastIndexOf("l")); // 3
console.log(indexCheck.lastIndexOf("w")); // -1

// Slice(start,end):- Extracts a part of a string

const language = "Javascript";
console.log(language.slice(0, 4)); // "Java"

// Replace

const trend = "React is a cool langauge";
console.log(trend.replace("React", "Next.js"));
// Next.js is a cool langauge

// REPLACE ALL

const wish = "HI HI HI";
console.log(wish.replaceAll("HI", "ok chill"));

// contact

const contacts = "Hello";
console.log(contacts.concat("", " World")); // Hello World

// Template literals (es6)

const bioData = {
  name: "suhag",
  age: 20,
  goal: "swe",
};
console.log(
  `Hello my name is ${bioData.name} and my age is ${bioData.age} and my goal is to become a ${bioData.goal}`
);

// REPEATS

const checkRepeats = "suhag";
console.log(checkRepeats.repeat(5)); // suhagsuhagsuhagsuhagsuhag

// INTERVIEW ORIENTED

// REVERSE A STRING
const strings = "hello";
console.log(strings.split("").reverse().join("")); // olleh

// Count Occurrences of a Character

const counts = strings.split("l").length - 1;
console.log(counts); // 2

const occurances = "hahahahahahahaha";
console.log(occurances.split("").length - 1); // 15

// CAPITALIZE EACH WORD

const title = "learn javascript now";
const result = title
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");
console.log(result); // "Learn Javascript Now"
