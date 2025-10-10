// Arrow Functions:- are shorter synatx versions of function in js

// To add 2 numbers

const add = (a, b) => a + b;
console.log(add(2, 3));

// To calculate birth year

const birthYear = (year) => 2025 - year;
console.log(birthYear(2003));

// Multi Line ArrowFunctions

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} is ${age} years old and he retires in ${retirement} years`;
};
console.log(yearsUntillRetirement(2003, "Suhag"));

// The THIS keyword:-

const person = {
  year: 2003,
  calcAge: function () {
    return 2025 - this.year;
  },
};
console.log(`The age is ${person.calcAge()}`);

// THIS KEYORD USING ARROW FUNCTION

const personInfo = {
  year: 2003,
  calcAge: function () {
    console.log(2025 - this.year);
  },
};
console.log(person.calcAge());

// Millenial

const perSon = {
  firstName: "Suhag",
  year: 2003,
  greet: function () {
    console.log(`Hey ${this.firstName}`);
    const self = this;
    const isMellenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMellenial();
  },
};
perSon.greet();
