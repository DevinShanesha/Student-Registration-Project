const Student = require('../models/Student');

// Login
exports.login = async (req, res) => {
  const { candidateName, email, dob } = req.body;
  console.log(candidateName, email, dob)
  try {
    const user = await Student.findOne({ candidateName, email, dob });
    console.log(user);
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({message: 'Student found'})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
