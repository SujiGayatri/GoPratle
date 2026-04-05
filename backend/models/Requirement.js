const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema({
  eventName: String,
  eventType: String,
  date: String,
  location: String,
  venue: String,
  hiringType: String,
  details: Object,
  additionalInfo: String,
});

module.exports = mongoose.model("Requirement", requirementSchema);