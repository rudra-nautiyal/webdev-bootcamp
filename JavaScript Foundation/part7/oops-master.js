let car = {
  make: "Toyota",
  model: "Camery",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);

// Prototype and prototypal chain

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound.`;
};

Array.prototype.rudy = function () {
  return `Custom method ${this}`;
};

let newArray = [1, 2, 3];
console.log(newArray.rudy());

// classes

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// inheritance

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example.`;
  }
}

let myCar = new Car("Tata", "Corolla");
console.log(myCar.drive());

// let vehOne = Vehicle("Toyota", "Corolla");

// encapsulation

class BankAccount {
  #balance = 0; // access within the class, not outside of it.

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();

// abstraction

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the Machine!`;
  }
  brewCoffe() {
    // complex calculation
    return `Brewing coffee!`; // I don't give a shit about your compilication regarding the machines. Thanks.
  }

  pressStart() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffe();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// myMachine.start();
// myMachine.brewCoffe();
console.log(myMachine.pressStart());

// polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly!`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// static method - are special method which can only be called by the class itself, no body else can call it.

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCal = new Calculator();
// console.log(miniCal.add(2,3)); not allowed

console.log(Calculator.add(2, 3));

// getters => access properties 
// setters => change them

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative.");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Rudy", 50000);
console.log(emp.salary);