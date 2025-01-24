const person = {
  name: "Rudy",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

const greetFunction = person.greet; // context lost
greetFunction();

const boundGreet = person.greet.bind({ name: "Freedom!" });
boundGreet();

// bind, call and apply