const courseModel = require("../Models/courseModel");

const courseController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await courseModel.find();
      return res.status(200).json(courses);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  },
  getCourse: async (req, res) => {
    try {
      const course = await courseModel.findById(req.params.id);
      return res.status(200).json(course);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  createCourse: async (req, res) => {
    const course = new courseModel({
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
    });
    try {
      const newcourse = await course.save();
      return res.status(201).json(newcourse);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  },
  updateCourse: async (req, res) => {
    try {
      const course = await courseModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res
        .status(200)
        .json({ course, msg: "course updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteCourse: async (req, res) => {
    try {
      const course = await courseModel.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .json({ course, msg: "course deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
module.exports = courseController;