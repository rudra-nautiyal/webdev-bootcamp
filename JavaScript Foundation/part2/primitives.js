// Number

let balance = 120;
let anotherBalance = new Number(120); // Not recommended

console.log(typeof balance);
console.log(typeof anotherBalance);

// In JS, everything is an Object!

// Null and Undefined

let firstName = null;
let lastName = undefined;
console.log(firstName);
console.log(lastName);

// String

let myString = "hello";
let myStringOne = "hola";
let username = "rudra";

let oldGreet = myString + " " + "rudra";
console.log(oldGreet);

let greetMessage = `hello, ${username}!`; // String Interpolation
let demoOne = `Value is ${2 * 2}!`;
console.log(greetMessage);
console.log(demoOne);

// Symbols

let sm1 = Symbol("rudy");
let sm2 = Symbol("rudy");

console.log(sm1 == sm2);
