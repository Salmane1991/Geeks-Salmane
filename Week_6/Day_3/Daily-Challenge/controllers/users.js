const db = require("../models/db");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { username, pass, email, first_name, last_name } = req.body;
  const hashedPw = bcrypt.hashSync(pass, 10);

  try {
    await db.transaction(async (trx) => {
      await trx("users").insert({
        username,
        email,
        first_name,
        last_name,
      });

      await trx("hashpwd").insert({
        username,
        password: hashedPw,
      });
    });

    res.send({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error during registration:", err);
    res
      .status(500)
      .send({ message: "Registration failed", error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db("hashpwd").where({ username }).first();

    if (!user) {
      return res.status(401).send("User Not Found!");
    }

    const userPw = user.password;
    const isValid = bcrypt.compareSync(password, userPw);

    if (isValid) {
      return res.send("Password is correct. You are logged In");
    } else {
      return res.send("Password is incorrect. Try Again!");
    }
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Login failed due to server error" });
  }
};

const users = async (req, res) => {
  try {
    const allUsers = await db("users").select("*");
    if (allUsers.length > 0) {
      return res.send(allUsers);
    }
  } catch (err) {
    return res.status(404).send("List not Found!");
  }
};

const getUserById = async (req, res) => {
  try {
    const searchID = req.params.id;
    const userId = await db("users").where({ id: searchID }).first();
    if (userId) {
      return res.json(userId);
    } else {
      return res.send("User not found");
    }
  } catch (err) {
    return res.send("Error Message : " + err);
  }
};

const updateUserById = async (req, res) => {
  try {
    const searchID = req.params.id;
    const userId = await db("users").where({ id: searchID }).first();

    if (!userId) {
      return res.send("User not found");
    }

    for (const key in req.body) {
      if (key in userId && typeof req.body[key] === typeof userId[key]) {
        await db("users")
          .where({ id: searchID })
          .update({ [key]: req.body[key] });
      }
    }

    res.send("User is updated");
  } catch (err) {
    return res.send("Error Message: " + err);
  }
};

module.exports = { register, login, users, getUserById, updateUserById };
