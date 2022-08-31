const express = require("express");
const studentController = require("./../controllers/studentController");

const router = express.Router();

router.route("/").post(studentController.createStudent);
router.route("/:id").get(studentController.getStudentById);
router.route("/all/:id").get(studentController.getAllStudentsOfCollege);

module.exports = router;
