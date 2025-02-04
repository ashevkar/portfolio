import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1A1A1A',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
    bottom: 0,
    width: '100%',
    fontSize: '15px',
  };

  return (
    <div style={footerStyle}>
<p style={{ fontSize: '25px' }}>Aishwarya Shevkar</p>      <p>© 2025 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
