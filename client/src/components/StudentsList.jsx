import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/students.css';
const StudentsList = () => {
  
  const students = ['Student 1', 'Student 2', 'Student 3','Student 4','Student 5']; 
  const studentid=['1','2','3','4','5'];
  return (
    <div>
      <h1 className='students-container' >Students List</h1>
      <ul className='students-list'>
        {students.map((students, index) => (
          <li key={index} className='student-item'>
          <Link to={`/students/${studentid[index]}`}><span className='student-id'>Name: {students} <pre>  </pre>ID: {studentid[index]}</span></Link> 
            
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default StudentsList