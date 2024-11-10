// src/pages/RegistrationForm.js

import React, { useState } from 'react';
import PersonalDetailsForm from '../components/PersonalDetailsForm';
import EducationalDetailsForm from '../components/EducationalDetailsForm';
import AdmissionDetailsForm from '../components/AdmissionDetailsForm';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await fetch('http://localhost:5000/api/students/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json();
      
      
      if(response.status == 201 ){
        alert(`${data.message}`)
      } if(response.status == 409){
        alert(`${data.message}`)
      } else {
        alert(`${data.message}`)
      }

    } catch (error) {
      alert("Form Not Submited.\nPlease try again!!")
      console.log(error.message);
    }
    
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl text-gray-600 font-semibold mb-6 text-center">Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <PersonalDetailsForm formData={formData} setFormData={setFormData} />
        <EducationalDetailsForm formData={formData} setFormData={setFormData} />
        <AdmissionDetailsForm formData={formData} setFormData={setFormData} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
