
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Style.css'
import { Link, NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <div>
    <Navbar  className="contain">
      <Container>
              
        <Navbar.Brand style={{color:'#ffffff'}}  href="#home">PADMA HEIGHTS <br /><p style={{fontSize:'1rem',color:'#ff7518'}}>HOTEL and RESTAURANT</p></Navbar.Brand>
             
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menus">
            <Nav.Link className="alink" href="#home">Home</Nav.Link>
            <Nav.Link className="alink" href="#link">Link</Nav.Link>
            <NavDropdown className="alink"  title=" Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
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