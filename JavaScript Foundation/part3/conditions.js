// Checking if a number is greater than another number.

let num1 = 5;
let num2 = 8;

if (num1 < num2) {
  console.log("num1 is smaller than num2");
} else {
  console.log("num1 is bigger than num2");
}

// Check if one String is equal to another String

let username = "Rudra";
let anotherUsername = "rudy";

if (username == anotherUsername) {
  console.log("Pick another username!");
} else {
  console.log("Username valid!");
}

// Checking is a variable is a number or not?

let score = 44;

if (typeof score === "number") {
  console.log("Yes, this is a number!");
} else {
  console.log("Nope, not a number.");
}

// Checking if a boolean value is true or false

let bool = true;

if (bool == true) {
  console.log("Yes, it's true.");
} else {
  console.log("Nope, it's false.");
}

// Checking if an Array is empty or not

let items = [];

if (items.length == 0) {
  console.log("Empty");
} else {
  console.log("NOT Empty");
}