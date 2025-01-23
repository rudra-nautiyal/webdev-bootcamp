// function which remember the env in which they were created. fn can retain the variable which are declared outside of it. But remember, clousure is a fn.

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
