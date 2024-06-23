import React from "react";
import GenreAnalysis from "./components/GenreAnalysis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudentsList from "./components/StudentsList";
import BookInventory from "./pages/BookInventory";
import StudentDashboard from "./pages/StudentDashboard";
import CheckInForm from "./pages/CheckInForm";
import CheckOut from "./pages/checkOut";
import Login from "./pages/Login";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/students' element={<StudentsList />} />
        <Route path='/book-inventory' element={<BookInventory />} />
        <Route path='/all-students' element={<StudentsList />} />
        <Route path='/student/:studentid' element={<StudentDashboard />} />
        <Route path='/checkin' element={<CheckInForm/>} />
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;