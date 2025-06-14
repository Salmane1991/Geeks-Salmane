const express = require("express");
const { fetchPosts } = require("./data/dataService.js");

const app = express();
const port = 5000;

app.get("/", async (req, res) => {
  try {
    const data = await fetchPosts();
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server is alive at http://localhost:${port}`);
});
