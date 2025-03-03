const express = require("express");
const app = express();

// Middleware to parse and validate query parameters
app.use((req, res, next) => {
  req.a = Number(req.query.a);
  req.b = Number(req.query.b);

  if (isNaN(req.a) || isNaN(req.b)) {
    return res.status(400).send("Invalid numbers");
  }
  next();
});

app.get("/multiply/:id1/:id2", (req, res) => {
  res.send(String(req.a * req.b));
});

app.get("/add", (req, res) => {
  res.send(String(req.a + req.b));
});

app.get("/divide", (req, res) => {
  if (req.b === 0) return res.status(400).send("Cannot divide by zero");
  res.send(String(req.a / req.b));
});

app.get("/subtract", (req, res) => {
  res.send(String(req.a - req.b));
});

app.listen(3000);
