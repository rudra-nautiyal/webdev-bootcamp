const username = {
  "first Name": "rudra",
  isLoggedin: true,
};

username.firstName = "rudy";
username.lastname = "nautiyal"

console.log(username["first Name"]);
console.log(username.lastname);
console.log(username);

console.log(typeof username);

let today = new Date();
console.log(today.getDate());

// Array

let anotherUser = ["rudy", true]

console.log(anotherUser[1]);

// JS does implicit conversion, that is, it tries to be smart and does conversion on it's own!