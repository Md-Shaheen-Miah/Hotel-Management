import React from 'react';
import Header from './admin/components/Header'
import Sidebar from './admin/components/Sidebar'
import Footer from './admin/components/Footer'
import Dashboard from './admin/pages/Dashboard'
import Booking from './admin/pages/Booking'
import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
    <div><Header/></div>
    <div style={{width:'100%'}} >
      <div style={{width:'20%',float:'left'}}><Sidebar/></div>
      <div style={{width:'80%',float:'right'}}>
        <Routes>
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Booking" element={<Booking/>} /> 

        </Routes>
        <Footer/>
        
      </div>
      
    </div>
    
   
   </BrowserRouter>
  )
}

export default App;
