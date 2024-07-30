const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.post("/addstudent", async (req, res) => {
  try {
    const { studentname } = await req.body;
    const std = await Student.findOne({ studentname });
    console.log(std);
    if (!std) {
      let stud = new Student(std);
      await stud.save();
      res.json({ message: "Student created successfully", student: std });
    } else {
      res.json({ message: "Student Name Already Exists", name: studentname });
    }
  } catch (e) {
    console.log(e);
  }
});
// git commemt added
router.get("/getall", async (req, res) => {
  try {
    const std = await Student.find();
    res.json(std);
  } catch (e) {
    console.log(e);
  }
});

router.put("/update/:name", async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name);

    // Find the student by name
    let std = await Student.findOne({ studentname: name });
    console.log(std);

    if (std) {
      // Update the student document with the new data
      std.set(req.body);
      await std.save();
      res.json(std);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/delete/:name", async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name);

    // Find the student by name
    let std = await Student.findOneAndDelete({ studentname: name });
    console.log(std);

    if (std) {
      res.json({ message: "Student deleted successfully", student: std });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
