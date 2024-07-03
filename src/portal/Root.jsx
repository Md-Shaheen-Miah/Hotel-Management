import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousels from './pages/Carousels'
import Room from './pages/Room'
import Service from './pages/Service'
export const Root = () => {
  return (
    <div>
    <Navbar/>
   <Carousels/>
   <Room/>
   <Service/>

   <Footer/>
    </div>
  )
}
