const express = require("express");

const collegeRouter = require("./routes/collegeRouter");
const studentRouter = require("./routes/studentRouter");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "*");
    return res.status(200).json({});
  }
  next();
});

app.use(require("cors"));
app.use(express.json());
app.use("/api/v1/colleges", collegeRouter);
app.use("/api/v1/students", studentRouter);

module.exports = app;
