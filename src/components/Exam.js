import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Exam = () => {
  const { courseId } = useParams();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState('');
  const studentId = sessionStorage.getItem('studentId'); // Retrieve student ID from sessionStorage

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/courses/${courseId}/exam`);
        setExam(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exam:', error);
        setError('Failed to fetch exam.');
        setLoading(false);
      }
    };

    fetchExam();
  }, [courseId]);

  const handleAnswerSubmit = async () => {
    try {
      // Post answer to the backend endpoint
      await axios.post(`http://localhost:8080/exams/${exam.id}/submit?studentId=${studentId}`, [answer]);
      // Optionally, you can handle success or show a confirmation message
      console.log('Answer submitted successfully');
    } catch (error) {
      console.error('Error submitting answer:', error);
      // Handle error
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <h1>Exam Page</h1>
      <p>Student ID: {studentId}</p> {/* Display student ID */}
      {exam ? (
        <div>
          <p>Test Name: {exam.testName}</p>
          <p>Duration: {exam.testDuration} minutes</p>
          <p>Start Time: {exam.testStartTime}</p>
          <p>No. of Questions: {exam.testNoOfQuestions}</p>
          {/* Render test papers if available */}
          {exam.testPapers && exam.testPapers.length > 0 && (
            <div>
              <h2>Test Papers</h2>
              {exam.testPapers.map((testPaper, index) => (
                <div key={index}>
                  <p>Test Paper ID: {testPaper.testPaperId}</p>
                  <p>Question: {testPaper.testPaperQuestion}</p>
                  <p>Choice 1: {testPaper.testPaperChoice1}</p>
                  <p>Choice 2: {testPaper.testPaperChoice2}</p>
                  <p>Choice 3: {testPaper.testPaperChoice3}</p>
                  <p>Choice 4: {testPaper.testPaperChoice4}</p>
                </div>
              ))}
            </div>
          )}
          {/* Answer input field */}
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer"
          />
          {/* Submit button */}
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
        </div>
      ) : (
        <p>No exam details available.</p>
      )}
    </div>
  );
};

export default Exam;
