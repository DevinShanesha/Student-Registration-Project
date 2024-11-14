const express = require('express');
const { createStudentRegistration } = require('../controllers/studentController');;
const router = express.Router();

// Routes for students
router.post('/register', createStudentRegistration) // creating student in database

module.exports = router;
