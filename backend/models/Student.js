const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  candidateName: String,
  fatherName: String,
  motherName: String,
  gender: String,
  dob: Date,
  mobile: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: String,
  state: String,
  pincode: String,
  matricYear: Number,
  matricMaxMarks: Number,
  matricObtainedMarks: Number,
  interYear: Number,
  interMaxMarks: Number,
  interObtainedMarks: Number,
  branch: String
});

module.exports = mongoose.model('Student', studentSchema);
