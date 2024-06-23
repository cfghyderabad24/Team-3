import React from "react";
import GenreAnalysis from "./components/GenreAnalysis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudentsList from "./components/StudentsList";
import BookInventory from "./pages/BookInventory";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/students' element={<StudentsList />} />
        <Route path='/book-inventory' element={<BookInventory />} />
        <Route path='/all-students' element={<StudentsList />} />
        <Route path='/student/:studentid' element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
