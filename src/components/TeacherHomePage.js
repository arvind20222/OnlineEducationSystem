import React from 'react'
import AddCourse from './AddCourse'

export default function TeacherHomePage() {
  return (
    <div>
      <h1>Teacher Home Page</h1>
      <p>Welcome to the teacher home page!</p>
      <p>This page is for teachers only.</p>
      <AddCourse/>
    </div>
  )
}
