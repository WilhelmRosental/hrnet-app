import React from 'react';

const headerStyle = {
  textAlign: 'center' as const,
  padding: '20px 0',
  borderBottom: '1px solid #ddd',
  marginBottom: '20px'
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333',
  margin: 0
};

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>HRnet</h1>
    </header>
  );
};

export default Header;
