// src/components/AdmissionDetailsForm.js

import React from 'react';

const AdmissionDetailsForm = ({ formData, setFormData }) => (
  <div className="mb-6">
    <h2 className="text-2xl text-gray-600 font-semibold mb-4">Branch Details</h2>
    <select
      value={formData.branch || ''}
      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
      className="border border-gray-300 p-2 rounded w-full mb-4"
    >
      <option value="">Select Branch</option>
      <option value="Computer Science Engineering">Computer Science Engineering</option>
      <option value="Information Technology">Information Technology</option>
      <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
      <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
      <option value="Electronics and Electrical Engineering">Electronics and Electrical Engineering</option>
      <option value="Mechanical Engineering">Mechanical Engineering</option>
      <option value="Production Engineering">Production Engineering</option>
      <option value="Civil Engineering">Civil Engineering</option>
      <option value="Petroleum Engineering">Petroleum Engineering</option>
    </select>
  </div>
);

export default AdmissionDetailsForm;
