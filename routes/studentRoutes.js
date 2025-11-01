import express from "express";
import Student from "../models/studentModel.js";

const router = express.Router();

// 🟢 GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 POST new student
router.post("/", async (req, res) => {
  try {
    const { name, course, age, city } = req.body;
    if (!name || !course) {
      return res.status(400).json({ message: "Name and course are required" });
    }
    const newStudent = new Student({ name, course, age, city });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟡 PUT (update student by id)
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔴 DELETE student by id
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
