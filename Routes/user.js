const express = require("express");
const userController = require("../Controllers/userController");
const authorizationMiddleware=require('./Middleware/authorizationMiddleware')
const router = express.Router();

// * Get all users
router.get("/", authorizationMiddleware(['admin']),getAllUsers);

// * Get a user by id
router.get("/:id", authorizationMiddleware(['admin']), userController.getUser);

// * Get current user
router.get('/current', authorizationMiddleware(['admin','student']), userController.getCurrentUser);

// * Update a user

router.put("/:id",authorizationMiddleware(['admin','student']),userController.updateUser);

// * Delete a user
router.delete("/:id",authorizationMiddleware(['admin']),userController.deleteUser);


// * Get courses of specific student
router.get("/courses/:studentId",  authorizationMiddleware(['admin','student']),userController.get);

//* add course
router.put("/add/:studentId/:courseId", authorizationMiddleware(['admin']), userController.addCourse);

//* remove course
router.put("/remove/:studentId/:courseId",  authorizationMiddleware(['admin']), userController.dropCourse);

module.exports = router;
