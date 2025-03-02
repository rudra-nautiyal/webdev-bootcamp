// an important metric to ensure that your backend aren't getting overwhelmed.

const express = require("express");
const app = express();
let requestCount = 0;

function requestCounter(req, res, next) {
  requestCount++;
  next();
}

app.use(requestCounter);

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

app.get("/requestcounter", function (req, res) {
  res.json({
    requests: requestCount,
  });
});

app.listen(3000);
