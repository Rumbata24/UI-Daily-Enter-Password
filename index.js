const express = require("express");
const app = express();
const path = require("path");

// Middleware to parse JSON in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  const enteredPassword = req.body.password;

  // Check for undefined or null password
  if (!enteredPassword) {
    return res.status(400).send("Password is required");
  }

  // Remove leading and trailing white spaces
  const password = enteredPassword.trim();

  // Check the password
  if (password === "pass123") {
    res.status(200).send(`Good job logging in!!`);
  } else {
    res.status(401).send(`Sorry, failed to log in`);
  }
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000.....`);
});
