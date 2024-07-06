import React from 'react';
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import './Style.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (

    <div>
      <Navbar/>
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>
              <div><h1 style={{textAlign:'center'}}>Log in</h1></div>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
    <Footer/>
    </div>
  );
}

export default App;