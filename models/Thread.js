const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    cover: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Thread", ThreadSchema);
