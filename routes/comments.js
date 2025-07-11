const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

router.post("/", async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.status(201).json(comment);
});

module.exports = router;
