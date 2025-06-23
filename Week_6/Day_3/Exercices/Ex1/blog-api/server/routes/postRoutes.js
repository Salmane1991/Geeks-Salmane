const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/postsController");

router.get("/posts", ctrl.getPosts);
router.get("/posts/:id", ctrl.getPost);
router.post("/posts", ctrl.create);
router.put("/posts/:id", ctrl.update);
router.delete("/posts/:id", ctrl.remove);

module.exports = router;
