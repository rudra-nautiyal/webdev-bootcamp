const bcrypt = require("bcrypt");
const { z } = require("zod");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect(
  ""
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  // input validation
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(6),
    name: z.string().min(3).max(100),
  });

  const parsedData = requiredBody.safeParse(req.body);

  if (!parsedData.success) {
    res.json({
      message: `Incorrect format!`,
      error: parsedData.error,
    });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    return res.json({
      message: "Email already exists!",
    });
  }

  res.json({
    message: "You are signed up",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    return res.json({
      message: "User does not exist!",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
