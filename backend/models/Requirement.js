const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  eventType: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  venue: {
    type: String,
    default: "",
    trim: true,
  },
  hiringType: {
    type: String,
    required: true,
    enum: ["planner", "performer", "crew"], // restrict values
  },
  details: {
    type: Object,
    required: true,
  },
  additionalInfo: {
    type: String,
    default: "",
  },
}, { timestamps: true });

module.exports = mongoose.model("Requirement", requirementSchema);