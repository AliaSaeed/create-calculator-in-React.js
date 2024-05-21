// Button.js

import React from 'react';

const buttonStyle = {
  border: 'none',
  width: '60px',
  height: '60px',
  margin: '10px',
  borderRadius: '50%',
  background: 'rgb(25, 25, 25)',
  color: '#eae4e4',
  fontSize: '20px',
  boxShadow: '-8px -8px 15px rgba(176, 176, 176, 0.1)',
  cursor: 'pointer',
};

const Button = ({ value, onClick, className }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>{value}</button>
  );
};

export default Button;
