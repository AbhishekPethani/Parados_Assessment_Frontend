import React from 'react';

const Button = ({ onClick, label, type, disabled }) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '10px 15px',
        fontSize: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        width: '200px',
      }}
    >
      {label}
    </button>
  );
};

export default Button;