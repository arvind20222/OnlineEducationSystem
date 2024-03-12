import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'; 
import StudentLogin from '../components/StudentLogin';
import AdminLogin from '../components/AdminLogin';
import StudentRegistration from '../components/StudentRegistration';
import SignInSelection from '../components/SignInSelection';
import TeacherLogin from '../components/TeacherLogin';
import SignUpSelection from '../components/SignUpSelection'; // Import the SignupSelection component
import TeacherRegistration from '../components/TeacherRegistration'; // Import the TeacherRegistration component
import StudentHomePage from '../components/StudentHomePage';
import TeacherHomePage from '../components/TeacherHomePage';
import Exam from '../components/Exam';



const RoutingPaths = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/signin" element={<SignInSelection />} /> {/* Add route for SignInSelection */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/signup" element={<SignUpSelection />} /> {/* Add route for SignupSelection */}
        <Route path="/teacher-registration" element={<TeacherRegistration />} /> {/* Add route for TeacherRegistration */}
        <Route path="/student-homepage" element={<StudentHomePage />} /> 
        <Route path="/teacher-dashboard" element={<TeacherHomePage />} />
        <Route path="/exam/:courseId" element={<Exam />} />
      </Routes>
    </Router>
  );
}

export default RoutingPaths;
