const express = require("express");
const router = express.Router();
const {
  register,
  login,
  users,
  getUserById,
  updateUserById,
} = require("../controllers/users");

router.post("/register", register);
router.post("/login", login);
router.get("/users", users);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUserById);

module.exports = router;
