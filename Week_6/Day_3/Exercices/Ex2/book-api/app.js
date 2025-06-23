const express = require("express");
const app = express();
const booksRoutes = require("./server/routes/booksRoutes");

app.use(express.json());
app.use("/api", booksRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
