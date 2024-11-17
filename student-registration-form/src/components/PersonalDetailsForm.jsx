// src/components/PersonalDetailsForm.jsx

import React from 'react';

const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const PersonalDetailsForm = ({ formData, setFormData }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl text-gray-600 font-semibold mb-4">Personal Details</h2>

      <input
        required
        type="text"
        placeholder="Candidate's Name"
        value={formData.candidateName || ''}
        onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />

      <input
        type="text"
        placeholder="Father's Name"
        value={formData.fatherName || ''}
        onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />

      <input
        type="text"
        placeholder="Mother's Name"
        value={formData.motherName || ''}
        onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />

      <div className="mb-4">
        <label className="block text-gray-700">Gender</label>
        <select
          value={formData.gender || ''}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <input
        required
        type="date"
        placeholder="Date of Birth"
        value={formData.dob || ''}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />

      <input
        required
        type="tel"
        placeholder="Mobile Number"
        value={formData.mobile || ''}
        onChange={(e) =>
          setFormData({
            ...formData,
            mobile: e.target.value.replace(/\D/g, '').slice(0, 10) // Only digits, max 10
          })
        }
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />

      <input
        required
        type="email"
        placeholder="Email ID"
        value={formData.email || ''}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />

      <textarea
        placeholder="Address"
        value={formData.address || ''}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />

      <div className="mb-4">
        <label className="block text-gray-700">State</label>
        <select
          value={formData.state || ''}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">Select State</option>
          {statesOfIndia.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="Pincode"
        value={formData.pincode || ''}
        onChange={(e) =>
          setFormData({
            ...formData,
            pincode: e.target.value.replace(/\D/g, '').slice(0, 6) // Only digits, max 6
          })
        }
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
    </div>
  );
};

export default PersonalDetailsForm;
