import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <h2>Error Message</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
