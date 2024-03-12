import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseList from './CourseList';
import Navbar from './Navbar';

const StudentHomePage = () => {
  const [courses, setCourses] = useState([]);
  const studentId = sessionStorage.getItem('studentId'); // Retrieve student ID from sessionStorage

  useEffect(() => {
    // Fetch courses data from backend API
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Student Home Page</h1>
      
      <h2>Welcome, Student {studentId}</h2> {/* Display student ID */}
      
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </div>
  );
};

export default StudentHomePage;
