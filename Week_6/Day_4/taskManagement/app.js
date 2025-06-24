const express = require("express");
const usersRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());
app.use("/", usersRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
