const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    threadId: { type: mongoose.Schema.Types.ObjectId, ref: "Thread" },
    author: String,
    content: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Post", PostSchema);
