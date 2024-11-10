// src/components/EducationalDetailsForm.jsx

import React, { useState, useEffect } from 'react';

const EducationalDetailsForm = ({ formData, setFormData }) => {
  const calculatePercentage = (maxMarks, obtainedMarks) =>
    maxMarks && obtainedMarks ? ((obtainedMarks / maxMarks) * 100).toFixed(2) : '';

  // Calculate percentage for Matriculation
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      matricPercentage: calculatePercentage(prevData.matricMaxMarks, prevData.matricObtainedMarks)
    }));
  }, [formData.matricMaxMarks, formData.matricObtainedMarks]);

  // Calculate percentage for Intermediate
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      interPercentage: calculatePercentage(prevData.interMaxMarks, prevData.interObtainedMarks)
    }));
  }, [formData.interMaxMarks, formData.interObtainedMarks]);

  return (
    <div className="mb-6">
      <h2 className="text-2xl text-gray-600 font-semibold mb-4">Educational Details</h2>

      {/* Matriculation Details */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-600 font-semibold mb-2">Matriculation Marks Detail</h3>
        <input
          type="text"
          placeholder="Passing Year"
          value={formData.matricYear || ''}
          onChange={(e) =>
            setFormData({
              ...formData,
              matricYear: e.target.value.replace(/\D/g, '').slice(0, 4) // Only digits, max 4
            })
          }
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="text"
          placeholder="Subjects"
          value={formData.matricSubjects || ''}
          onChange={(e) => setFormData({ ...formData, matricSubjects: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="number"
          placeholder="Maximum Marks"
          value={formData.matricMaxMarks || ''}
          onChange={(e) =>
            setFormData({ ...formData, matricMaxMarks: e.target.value })
          }
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="number"
          placeholder="Obtained Marks"
          value={formData.matricObtainedMarks || ''}
          onChange={(e) => {
            const value = e.target.value;
            if (Number(value) <= Number(formData.matricMaxMarks)) {
              setFormData({ ...formData, matricObtainedMarks: value });
            }
          }}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <div className="mb-4">
          <label className="block text-gray-700">Percentage</label>
          <input
            type="text"
            value={formData.matricPercentage || ''}
            readOnly
            className="border border-gray-300 p-2 rounded w-full bg-gray-100"
          />
        </div>
      </div>

      {/* Intermediate Details */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-600 font-semibold mb-2">Intermediate Marks Detail</h3>
        <input
          type="text"
          placeholder="Passing Year"
          value={formData.interYear || ''}
          onChange={(e) =>
            setFormData({
              ...formData,
              interYear: e.target.value.replace(/\D/g, '').slice(0, 4) // Only digits, max 4
            })
          }
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="text"
          placeholder="Subjects"
          value={formData.interSubjects || ''}
          onChange={(e) => setFormData({ ...formData, interSubjects: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="number"
          placeholder="Maximum Marks"
          value={formData.interMaxMarks || ''}
          onChange={(e) => setFormData({ ...formData, interMaxMarks: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="number"
          placeholder="Obtained Marks"
          value={formData.interObtainedMarks || ''}
          onChange={(e) => {
            const value = e.target.value;
            if (Number(value) <= Number(formData.interMaxMarks)) {
              setFormData({ ...formData, interObtainedMarks: value });
            }
          }}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <div className="mb-4">
          <label className="block text-gray-700">Percentage</label>
          <input
            type="text"
            value={formData.interPercentage || ''}
            readOnly
            className="border border-gray-300 p-2 rounded w-full bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationalDetailsForm;
