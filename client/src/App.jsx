import React from "react";
import CheckInForm from "./pages/CheckInForm";
import CheckOut from "./pages/checkOut";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<h>dashboard</h>} />
  <Route path='/checkin' element={<CheckInForm/>} />
  <Route path='/checkout' element={<CheckOut/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App;