const Student = require('../models/Student');

exports.createStudentRegistration = async (req, res) =>{
  try {
    const formData = req.body
    const isAlreadyExists = await Student.findOne({ $or: [{ email: formData.email }, { mobile: formData.mobile }] })
    
    if( isAlreadyExists ){
      return res.status(409).json({message: "Use different Mobile No. or Email."})
    }
    
    await Student.create(formData);
    res.status(201).json({ message: "Form submited successfully"});
    
  } catch (error) {
    res.status(500).json({ message: "Form Not Submited.\nPlease try again!!" });
  }
}

// Get student info (by admin or student)
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update student info (student or admin)
exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
