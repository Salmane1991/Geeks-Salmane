const express = require("express");
const path = require("path");
const usersRoutes = require("./routes/users");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", usersRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
