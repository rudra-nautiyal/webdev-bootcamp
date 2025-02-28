const express = require("express");
const app = express();

// route handlers
app.get("/", function (req, res) {
    // req = request for
  res.send("Hello World");
});

app.listen(3000); // which port to listen on? This line of code makes sure that this line runs infinitely until you exit it.
