import React from 'react';
import Header from './admin/components/Header'
import Sidebar from './admin/components/Sidebar'
import Footer from './admin/components/Footer'
import Dashboard from './admin/pages/Dashboard'
import Booking from './admin/pages/Booking'
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Root } from './portal/Root';



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
        <Route path="/Dashboard" element={<Dashboard/>} />
    

        </Routes>
        {pathname==="/Dashboard" &&  <Footer/>}
       
        
      </div>
      
    </div>
    
    </>

  )
}

export default App;
