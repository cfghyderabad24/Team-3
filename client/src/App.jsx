
import React from 'react';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StudentsList from './components/StudentsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
       
        <Route path='/students' element={<StudentsList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;