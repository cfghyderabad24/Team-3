import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/students.css';
import { fetchStudents } from '../services/studentService';
const StudentsList = () => {
  const [students, setStudents] = useState([]);
    useEffect(() => {
        const loadData = async()=>{
            try {   
                const response = await fetchStudents();
                console.log(response)
                setStudents(response);
            } catch (error) {
                console.log(error);
            }
        }
    
        loadData();
      }, []);
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Students List</h1>
      <ul className="list-none space-y-4">
        {students.map(student => (
          <li key={student._id} className="bg-white rounded-lg shadow px-5 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-lg text-gray-900 font-medium">{student.name}</div>
              <div className="text-sm text-gray-600">Grade: {student.grade}</div>
              <div className="text-sm text-gray-500">ID: {student.student_id}</div>
            </div>
            <Link to={`/student/${student._id}`} className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList