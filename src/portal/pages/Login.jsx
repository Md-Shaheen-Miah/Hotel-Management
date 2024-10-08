import React from 'react';
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import {  NavLink } from 'react-router-dom';

const Profile = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    profileCard: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '1000px',
    },
    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '1rem',
    },
    profileName: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    profileEmail: {
      fontSize: '16px',
      color: '#777',
      marginBottom: '1rem',
    },
    profileBio: {
      fontSize: '16px',
      color: '#555',
    },
  };

  return (
  <div>
    <Navbar/>
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <img
          src="src/assets/images/shaheen.jpg"
          alt=""
          style={styles.profileImage}
        />
        <h2 style={styles.profileName}>Md. Shaheen Miah</h2>
        <p style={styles.profileEmail}>E-mail:mdshaheen60101@gmail.com</p>
        <p style={styles.profileEmail}>Phone:+8801641160101</p>
        <p style={styles.profileEmail}>Address:Tongi,Gazipur,Dhaka</p>
        <p style={styles.profileBio}>
        Project administration is the backbone of successful project management, ensuring that all aspects of a project are organized, monitored, and executed efficiently. As a project admin, your role is crucial in aligning team efforts, managing resources, and maintaining communication. This article will delve into key strategies and best practices to enhance your effectiveness as a project admin.
          <div style={{width:'100%'}}>
            <h2>Are You Admin?</h2>
            <NavLink style={{width:'50%',float:'left',textDecoration:'none'}} to="/Signin">YES</NavLink>
            <NavLink  style={{width:'50%',float:'left',textDecoration:'none'}}  to="/">NO</NavLink>
          </div>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Profile;
