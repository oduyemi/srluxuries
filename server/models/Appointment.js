const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  reason: String,
  firstVisit: String,
  callback: String,
  visitPreference: String,
});

module.exports = mongoose.model("Appointment", appointmentSchema);
