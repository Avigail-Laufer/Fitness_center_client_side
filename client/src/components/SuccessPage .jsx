import React from 'react';
import './Success.css'; // קובץ CSS לעיצוב
import { FaCheckCircle } from 'react-icons/fa'; // אייקון מ-Font Awesome

const SuccessPage = () => {
  return (
    <div className="success-page">
      <div className="success-message-container">
        <FaCheckCircle className="success-icon" />
        <h1>Registration Successful!</h1>
        <p>Thank you for joining our gym. We are excited to have you as a member.</p>
        <p>Check your email for further details and instructions.</p>
        <button className="home-button" onClick={() => window.location.href = '/'}>Go to Home</button>
      </div>
    </div>
  );
};

export default SuccessPage;