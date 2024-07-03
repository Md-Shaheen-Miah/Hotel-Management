
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
              
        <Navbar.Brand style={{color:'#ffffff'}}  href="#home">PADMA HEIGHTS <br /><p style={{fontSize:'1rem',color:'#ff7518'}}>HOTEL and RESTAURANT</p></Navbar.Brand>
             
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menus">
            <NavLink className="alink" to="/Room">ROOMS</NavLink>
            <NavLink className="alink" href="#link">SERVICES</NavLink>
            <NavLink className="alink" href="#link">Link</NavLink>
            <NavLink className="alink" href="#link">Link</NavLink>
            <NavLink className="alink" href="#link">Link</NavLink>
            <NavLink className="kook" to="#link">18+</NavLink>
            
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