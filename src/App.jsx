import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homeroute from './routing/Homeroute'
import Adminroute from './routing/Adminroute';
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Homeroute/>} />
   <Route path="/Adminroute" element={<Adminroute/>} />
   
   
   
   
   </Routes>
   </BrowserRouter>
  )
}

export default App;
