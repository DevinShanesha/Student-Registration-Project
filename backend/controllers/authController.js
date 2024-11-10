const Student = require('../models/Student');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Register a new student
exports.register = async (req, res) => {
  const { email, password, ...otherData } = req.body;
  try {
    const newStudent = await Student.create({ email, password, ...otherData });
    const token = generateToken(newStudent._id, newStudent.role);
    res.status(201).json({ token, student: newStudent });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password, isAdmin } = req.body;

  try {
    const user = await User.findOne({ email, role: isAdmin ? 'admin' : 'student' });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
