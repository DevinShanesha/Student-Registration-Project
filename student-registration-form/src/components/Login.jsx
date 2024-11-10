// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ email, password, isAdmin }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token and role in localStorage or state
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', isAdmin ? 'admin' : 'student');

        // Redirect to the respective dashboard
        if (isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/student/dashboard');
        }
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-600">Login</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            className="border border-gray-300 p-2 rounded w-full mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            className="border border-gray-300 p-2 rounded w-full mb-4"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;