import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to fetch courses.');
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {error && <div className="error">{error}</div>}
      {courses.map(course => (
        <div key={course.id} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              {course.teacher && (
                <p className="card-text">Instructor: {course.teacher.name}</p>
              )}
              <p className="card-text">Start Date: {course.startDate}</p>
              <p className="card-text">End Date: {course.endDate}</p>
              <Link to={`/exam/${course.id}`} className="btn btn-primary">
                Go to Exam
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
