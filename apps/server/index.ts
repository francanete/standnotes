import express from "express";
import cors from "cors";
import { Error } from "mongoose";
const mongoose = require("mongoose");
const notesRoutes = require("./routes/notes");
const userRoutes = require("./routes/user");
require("dotenv").config();
const app = express();

app.use(express.json(), cors());

app.use("/api/notes", notesRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `[⚡️SERVER⚡️]: connected to DB and started on port ${process.env.PORT}`
      );
    });
  })
  .catch((error: Error) => console.log(error));

module.exports = app;
