const userDetails = {
  name: "Suhag",
  age: 22,
  friends: ["ds", "vinay", "srujan"],
  city: "Banglore",
};
console.log(userDetails.age);

userDetails.email = "suhagshetty07@gmail.com"; // adding into an object
userDetails.name = "Shetty"; // update
console.log(userDetails);

////////// NESTED OBJECTS ///////////////

const person = {
  name: "Suhag Shetty",
  address: {
    city: "Banglore",
    pincode: 560010,
  },
};
console.log(person.address.city);
// Banglore

//////////// OBJECT METHODS //////////

const user = {
  name: "Suhag",
  age: 22,
  greet: function () {
    console.log(`Hello my name is ${this.name} age is ${this.age}`);
  },
};
user.greet();
// Hello my name is Suhag age is 22

const bioData = {
  name: "suhag",
  age: 22,
  friends: ["srujan", "ds"],
  address: {
    city: "Banglore",
    pincode: 560010,
  },
  greet: function () {
    console.log(
      `Hello my name is ${this.name} age is ${this.age} address is ${this.address.city} pincode is ${this.address.pincode}`
    );
  },
};
bioData.greet();
