/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }

  return confirmOrder(); // JS Executation Context
}

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(10, 20);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

function makeTea(typeOfTea) {}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea); // Higher order fn

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
  return function (teatype) {
    return `Making ${teatype}`;
  };
}

let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));

/* Closure (Impt for Interview)
When a function is defined inside another function, it forms a closure. The inner function has access to:

1. Its own scope (variables defined within it).

2. The outer function's scope (variables and functions defined in the outer function).

3. Global scope (variables defined outside any function).
*/

const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

// map function - used for mapping individual values in an array.

const output = arr.map((x) => x * 2); // Valid syntax. This and fn double perform the same operation.

// filter function - used for filtering values in an array.

function isOdd(x) {
  return x % 2;
}

const output2 = arr.filter((x) => x % 2); // Valid syntax. This and fn isOdd perform the same operation.

// reduce function - used for reducing the sequence of values into a single value.

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const output3 = arr.reduce(function (acc, curr) {
  // similar to fn findSum but a bit more complex in regards to format. Overall, the same tho.
  acc = acc + curr;
  return acc;
}, 0);

const output4 = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

// https://youtu.be/zdp0zrpKzIE?si=PiD2xxxZblRvwxeL&t=1734 --> this question

const output5 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

// https://youtu.be/zdp0zrpKzIE?si=ijBbb1-W6p9ACTrC&t=1945 --> this question

const output6 = user.filter((x) => x.age < 30).map((x) => x.firstname);
