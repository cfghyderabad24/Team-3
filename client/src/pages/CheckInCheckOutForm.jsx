import React, { useState } from 'react';
import { Label, TextInput, Button, Select } from 'flowbite-react';
import './CheckInCheckOutForm.css';
import background from '../assets/background.jpg'

const CheckInCheckOutForm = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    bookId: '',
    bookName: '',
    action: 'check-out',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
    <img
        src={background}
        alt="img"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
        className="object-cover w-full h-full -z-10 absolute"
      />
   
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
    <h1 style={{ textAlign: 'center', color: 'black', marginBottom: '20px' }}>
          Check In - Check Out Form
        </h1>
      <div className="mb-4">
      
        <Label htmlFor="studentId">Student ID</Label>
        
        <TextInput
          id="studentId"
          name="studentId"
          type="text"
          placeholder="Enter student ID"
          value={formData.studentId}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="studentName">Student Name</Label>
        <TextInput
          id="studentName"
          name="studentName"
          type="text"
          placeholder="Enter student name"
          value={formData.studentName}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="bookId">Book ID</Label>
        <TextInput
          id="bookId"
          name="bookId"
          type="text"
          placeholder="Enter book ID"
          value={formData.bookId}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="bookName">Book Name</Label>
        <TextInput
          id="bookName"
          name="bookName"
          type="text"
          placeholder="Enter book name"
          value={formData.bookName}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="action">Action</Label>
        <Select
          id="action"
          name="action"
          value={formData.action}
          onChange={handleChange}
          className="input"
        >
          <option value="check-out">Check-Out</option>
          <option value="check-in">Check-In</option>
        </Select>
      </div>
      <div className="mb-4">
        <Label htmlFor="date">Date</Label>
        <TextInput
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="time">Time</Label>
        <TextInput
          id="time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="input"
        />
      </div>
      <Button type="submit" className="submit-button" >
        {formData.action === 'check-out' ? 'Check-Out Book' : 'Check-In Book'}
        
      </Button>
    </form>
    </div>
    
  );
};

export default CheckInCheckOutForm;
