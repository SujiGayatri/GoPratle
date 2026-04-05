const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const requirementRoutes = require("./routes/requirementRoutes");
app.use("/api/requirements", requirementRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));