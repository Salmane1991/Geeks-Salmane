const model = require("../models/postsModel");

async function getPosts(req, res) {
  const posts = await model.getAllPosts();
  res.json(posts);
}

async function getPost(req, res) {
  const post = await model.getPostById(req.params.id);
  if (post) res.json(post);
  else res.status(404).json({ message: "Post not found" });
}

async function create(req, res) {
  const { title, content } = req.body;
  const newPost = await model.createPost(title, content);
  res.status(201).json(newPost);
}

async function update(req, res) {
  const { title, content } = req.body;
  const updated = await model.updatePost(req.params.id, title, content);
  if (updated) res.json(updated);
  else res.status(404).json({ message: "Post not found" });
}

async function remove(req, res) {
  await model.deletePost(req.params.id);
  res.json({ message: "Post deleted" });
}

module.exports = { getPosts, getPost, create, update, remove };
