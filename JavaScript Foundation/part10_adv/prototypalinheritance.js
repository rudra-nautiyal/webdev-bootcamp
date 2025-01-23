// inheritance being done on prototypes

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hello, world! how are you, ${this.name}?`);
};

let hitest = new Person("rudra");
hitest.greet();
