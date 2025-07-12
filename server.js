require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const threadsRoutes = require("./routes/threads");
const postsRoutes = require("./routes/posts");
const commentsRoutes = require("./routes/comments");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/threads", threadsRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");

    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch((err) => console.error(err));
