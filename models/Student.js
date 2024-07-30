const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
    unique: true,
  },
  phno: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
