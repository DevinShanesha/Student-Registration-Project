// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import RegistrationForm from './pages/RegistrationForm';
import StudentDashboard from './pages/StudentDashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
    </Routes>
  </Router>
);

export default App;
