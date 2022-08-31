const express = require("express");
const collegeRouter = require("./routes/collegeRouter");
const studentRouter = require("./routes/studentRouter");

const app = express();

app.use(express.json());
app.use("/api/v1/colleges", collegeRouter);
app.use("/api/v1/students", studentRouter);

module.exports = app;
