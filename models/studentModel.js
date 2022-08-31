const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  college_id: {
    type: Number,
    required: true,
    ref: "College",
  },
  year_of_batch: {
    type: Number,
    required: true,
  },
  skills: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
