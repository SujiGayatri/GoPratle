const express = require("express");
const router = express.Router();
const Requirement = require("../models/Requirement");

router.post("/", async (req, res) => {
  try {
    const newRequirement = new Requirement(req.body);
    await newRequirement.save();
    res.status(201).json(newRequirement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;