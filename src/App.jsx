import React from 'react';
import Header from './admin/components/Header'
import Sidebar from './admin/components/Sidebar'
import Footer from './admin/components/Footer'
import Dashboard from './admin/pages/Dashboard'
import Service from './portal/pages/Service'
import Room from './portal/pages/Room'
import Contact from './portal/pages/Contact'
import Booking from './portal/pages/Booking'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Root } from './portal/Root';
import {Routes,Route,useLocation } from 'react-router-dom';



const App = () => {
  const {pathname}=useLocation()
  console.log(pathname)
  return (
    <>
    {pathname==="/Dashboard" && <Header/>}
 
    <div style={{width:'100%'}} >
      {pathname==="/Dashboard" &&   <div style={{width:'20%',float:'left'}}><Sidebar/></div>}
    
      <div className={pathname==="/Dashboard"?"w-80":""} >
        <Routes>
        <Route path="/" element={<Root/>} />
        <Route path='/Room' element={<Room/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Booking' element={<Booking/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
    

        </Routes>
        {pathname==="/Dashboard" &&  <Footer/>}
       
        
      </div>
      
    </div>
    
    </>

  )
}

export default App;
