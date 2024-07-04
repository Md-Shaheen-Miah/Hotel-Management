
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Style.css'
import {  NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <div>
    <Navbar  className="contain">
      <Container>
              
        <NavLink style={{color:'#ffffff',textDecoration:'none'}}  to="/">PADMA HEIGHTS <br /><p style={{fontSize:'1rem',color:'#ff7518'}}>HOTEL and RESTAURANT</p></NavLink>
             
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menus">
            <NavLink className="alink" to="/Room">ROOMS</NavLink>
            <NavLink className="alink" to="/Service">SERVICES</NavLink>
            <NavLink className="alink" to="#link">Link</NavLink>
            <NavLink className="alink" to="#link">Link</NavLink>
            <NavLink className="alink" to="#link">Link</NavLink>
            <NavLink className="kook" to="/">link</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className='login'>
      <NavLink style={{color:'#ffffff',textDecoration:'none'}}>Admin</NavLink>
      </div>
   
    </Navbar>
    </div>
  );
}

export default BasicExample;