const express = require("express");
const collegeController = require("./../controllers/collegeController");

const router = express.Router();

router
  .route("/")
  .get(collegeController.getAllColleges)
  .post(collegeController.createCollege);
router.route("/:id").get(collegeController.getCollegeById);
router.router("/:name").get(collegeController.getCollegeByName);
router.route("/similar").get(collegeController.getSimilarColleges);
