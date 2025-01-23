console.log(`hello`);

function sayHello() {
  console.log(`what's up?`);
}

setTimeout(() => {
  // asynchronous behaviour
  sayHello();
}, 2000);

console.log(`i was written after what's up. Why am i comming later?`);
