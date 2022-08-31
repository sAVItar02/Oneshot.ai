const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
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
  year_of_establishment: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  no_of_students: {
    type: Number,
    required: true,
  },
  courses: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
});

collegeSchema.virtual("students", {
  ref: "Student",
  localField: "id",
  foreignField: "college_id",
});

const College = mongoose.model("College", collegeSchema);
module.exports = College;
