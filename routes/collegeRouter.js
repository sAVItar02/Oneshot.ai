const express = require("express");
const collegeController = require("./../controllers/collegeController");

const router = express.Router();

router.route("/stats/sates").get(collegeController.getCountOfStates);
router.route("/stats/courses").get(collegeController.getCountOfStates);
router
  .route("/")
  .get(collegeController.getAllColleges)
  .post(collegeController.createCollege);
router.route("/similar").get(collegeController.getSimilarColleges);
router.route("/:id").get(collegeController.getCollegeById);
router.route("/name/:name").get(collegeController.getCollegeByName);

module.exports = router;
