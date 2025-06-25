const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");

const router = express.Router();
const filePath = "./data/users.json";

function getUsers() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users));
}

router.post("/register", async (req, res) => {
  const { name, lastname, email, username, password } = req.body;
  const users = getUsers();
  const exists = users.find(
    (u) => u.username === username || u.email === email
  );

  if (exists) return res.send("Username or Email already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    name,
    lastname,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  saveUsers(users);
  res.send("You are registered");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find((u) => u.username === username);

  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (match) res.send("You are logged in");
  else res.send("Wrong password");
});

router.get("/users", (req, res) => {
  const users = getUsers();
  res.json(users);
});

router.get("/users/:id", (req, res) => {
  const users = getUsers();
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) res.json(user);
  else res.send("User not found");
});

router.put("/users/:id", (req, res) => {
  const users = getUsers();
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) return res.send("User not found");

  users[index] = { ...users[index], ...req.body };
  saveUsers(users);
  res.send("User updated");
});

module.exports = router;
