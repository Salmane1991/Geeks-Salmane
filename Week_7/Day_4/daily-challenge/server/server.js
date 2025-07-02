const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const port = 5000;
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});

app.post("/api/world", (req, res) => {
  const { input } = req.body;
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${input}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
