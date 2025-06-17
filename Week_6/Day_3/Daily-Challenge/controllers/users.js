const db = require("../models/db");
const bcrypt = require("bcrypt");

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
    res.send({ message: "Registration failed" });
  }
};
