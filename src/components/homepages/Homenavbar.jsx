import React from 'react'
import { NavLink } from 'react-router-dom'

const Homeroute = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <NavLink to="/Adminroute">go</NavLink>
    </div>
  )
}

export default Homeroute
