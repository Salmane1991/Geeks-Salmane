const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

let posts = [
  { id: 1, title: "First Post", content: "This is the first post" },
  { id: 2, title: "Second Post", content: "This is the second post" },
];

app.get("/", (req, res) => {
  let html = "<h1>All Blog Posts</h1>";
  posts.forEach((post) => {
    html += `<h3>${post.title}</h3><p>${post.content}</p><hr>`;
  });

  html += `
    <h2>Create New Post</h2>
    <form method="POST" action="/posts">
      <input name="title" placeholder="Title" /><br />
      <textarea name="content" placeholder="Content"></textarea><br />
      <button type="submit">Add Post</button>
    </form>
  `;

  res.send(html);
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };
  posts.push(newPost);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
