const express = require("express");
const app = express();

// inmemory database

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

// query parameters; the thing that you send in the browser after localhost:3000

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "Done!",
  });
});

app.delete("/", function (req, res) {
  let atLeastOneUnhealthyKidney = false;
  const newKidneys = [];

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneUnhealthyKidney = true;
    } else {
      newKidneys.push(users[0].kidneys[i]); // Keep only healthy kidneys
    }
  }

  if (atLeastOneUnhealthyKidney) {
    users[0].kidneys = newKidneys; // Update kidney list after loop
    res.json({
      msg: "Unhealthy kidneys removed!",
    });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys!",
    });
  }
});

app.listen(3000);
