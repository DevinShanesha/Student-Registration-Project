const express = require('express');
const { getStudent, updateStudent, createStudentRegistration } = require('../controllers/studentController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const router = express.Router();

// Routes for students
router.post('/register', createStudentRegistration) // creating student in database
router.get('/:id', protect, getStudent); // Both student and admin
router.put('/:id', protect, updateStudent); // Both student and admin
router.put('/admin/:id', protect, adminOnly, updateStudent); // Admin only

module.exports = router;
