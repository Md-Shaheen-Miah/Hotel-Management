import React, { useState } from 'react';

const ModalLoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    closeModal();
  };

  return (
    <div style={styles.container}>
      <button onClick={openModal} style={styles.openButton}>Login</button>

      {isOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.closeButton} onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
              <button type="submit" style={styles.submitButton}>Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  openButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fefefe',
    padding: '20px',
    border: '1px solid #888',
    width: '300px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    animationName: 'animatetop',
    animationDuration: '0.4s',
  },
  closeButton: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '5px 0 10px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
};

export default ModalLoginForm;
