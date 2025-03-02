const express = require("express");
const app = express();

// function that returns a boolean if the age of the person is more than 14
function Over14(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

// middleware

function Over14Middleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next(); // transfer the control from middleware to the next handler
  } else {
    res.json({
      msg: "Sorry, you are not old enough.",
    });
  }
}

app.use(Over14Middleware); // please use this by the enntire app, for all no need for "/ride1", over14middleware, (req, res) => {}. Only triggers for things BELOW it, not for the above!

app.get("/ride1", function (req, res) {
  res.json({
    msg: "You have booked the ticket for ride 1!",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "You have booked the ticket for ride 2!",
  });
});

app.listen(3000);
