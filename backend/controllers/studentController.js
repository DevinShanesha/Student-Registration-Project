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