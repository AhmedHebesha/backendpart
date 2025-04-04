const express = require("express");
const courseController = require("../controller/courseController");
const authorizationMiddleware=require('./Middleware/authorizationMiddleware')
const router = express.Router();

// * Get all courses
router.get("/",authorizationMiddleware(['admin','student']), courseController.getAllCourses);

// * Get one course
router.get("/:id", authorizationMiddleware(['admin','student']),courseController.getCourse);

// * Create one course
router.post("/", authorizationMiddleware(['admin']),courseController.createCourse);

// * Update one course
router.put("/:id", authorizationMiddleware(['admin']),courseController.updateCourse);

// * Delete one course
router.delete("/:id",authorizationMiddleware(['admin']), courseController.deleteCourse);