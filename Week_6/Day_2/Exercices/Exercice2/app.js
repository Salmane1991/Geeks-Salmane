const express = require("express");
const app = express();
const router = require("./routes/todos");

app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
