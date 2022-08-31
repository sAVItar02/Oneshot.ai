const studentModel = require("./../models/studentModel");

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
