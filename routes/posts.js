const express = require("express");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const router = express.Router();

router.get("/:id/comments", async (req, res) => {
  const comments = await Comment.find({ postId: req.params.id }).sort({ createdAt: 1 });
  res.json(comments);
});

router.post("/", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

module.exports = router;
