const db = require("../config/db");

async function getAllPosts() {
  const result = await db.query("SELECT * FROM posts");
  return result.rows;
}

async function getPostById(id) {
  const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
  return result.rows[0];
}

async function createPost(title, content) {
  const result = await db.query(
    "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
    [title, content]
  );
  return result.rows[0];
}

async function updatePost(id, title, content) {
  const result = await db.query(
    "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *",
    [title, content, id]
  );
  return result.rows[0];
}

async function deletePost(id) {
  await db.query("DELETE FROM posts WHERE id = $1", [id]);
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
