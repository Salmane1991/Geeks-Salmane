const express = require("express");
const app = express();
const postsRoutes = require("./server/routes/postsRoutes");

app.use(express.json());
app.use("/api", postsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
