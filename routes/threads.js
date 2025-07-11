const express = require("express");
const Thread = require("../models/Thread");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", async (req, res) => {
  const threads = await Thread.find().sort({ createdAt: -1 });
  res.json(threads);
});

router.get("/:id/posts", async (req, res) => {
  const posts = await Post.find({ threadId: req.params.id }).sort({ createdAt: -1 });
  res.json(posts);
});

router.post("/", async (req, res) => {
  const thread = new Thread(req.body);
  await thread.save();
  res.status(201).json(thread);
});

module.exports = router;
