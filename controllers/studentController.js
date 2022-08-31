const studentModel = require("./../models/studentModel");
// const collegeModel = require("./../models/collegeModel");

exports.createStudent = async (req, res) => {
  try {
    const newStudent = await studentModel.create(req.body);
    res.status(201).json({
      message: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllStudentsOfCollege = async (req, res) => {
  try {
    const students = await studentModel.find({ college_id: req.params.id });
    res.status(201).json({
      status: "success",
      results: students.length,
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
