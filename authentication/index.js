const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "rudranautiyal";

app.use(express.json());

const users = [];

function authMiddleware(req, res, next) {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  const username = decodedInformation.username;

  if (!username) {
    res.json({
      message: "You are not signed in!",
    });
  } else {
    req.username = username;
    next();
  }
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // check if there exist people with the same username already exists.

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signed up!",
  });

  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(function (u) {
    if (u.username === username && u.password === password) {
      return true;
    } else {
      return false;
    }
  });

  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      message: token,
    });
    console.log(users);
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.get("/me", authMiddleware, function (req, res) {
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
});

app.listen(3000);
