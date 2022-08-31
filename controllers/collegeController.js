const collegeModel = require("./../models/collegeModel");

exports.createCollege = async (req, res) => {
  try {
    const newCollege = await collegeModel.create(req.body);
    res.status(201).json({
      message: "success",
      data: {
        college: newCollege,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getCollegeById = (req, res) => {
    try {
        const college = await collegeModel.findById(req.params.id);
        if(!college) {
            res.status(404).json({
                status: "fail",
                message: "college not found",
            })
        } else {
            res.status(200).json({
                status: "success",
                data: {
                    college: college,
                },
            });
        }
    } catch(err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        })
    }
}

exports.getAllColleges = async (req, res) => {
    try {
        const colleges = await collegeModel.find();
        res.status(200).json({
            status: "success",
            data: {
                results: colleges.length,
                colleges: colleges,
            },
        });
    } catch(err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        })
    }
}

exports.getCollegeByName = async (req, res) => {
    try {
        const college = await collegeModel.find({name: req.query.name});
        res.status(200).json({
            status: "success",
            data: {
                college: college,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

exports.getSimilarColleges = async (req, res) => {
    try {
        const colleges = await collegeModel.find({$or: [{city: req.query.city}, {state: req.query.state}, {no_of_students: {$gte: req.query.no_of_students - 100, $lte: req.query.no_of_students + 100}}]});
        res.status(200).json({
            status: "success",
            data: {
                results: colleges.length,
                colleges,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}
