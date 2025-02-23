function timer(resolve) {
  setTimeout(resolve, 3000);
}

function setTimeoutPromisified() {
  return new Promise(timer);
}

const p = setTimeoutPromisified();

function callback() {
  console.log("timer has ended");
}
p.then(callback);
