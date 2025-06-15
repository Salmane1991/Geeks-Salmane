const express = require("express");
const app = express();
const booksRouter = require("./routes/books");

app.use(express.json());
app.use("/", booksRouter);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
