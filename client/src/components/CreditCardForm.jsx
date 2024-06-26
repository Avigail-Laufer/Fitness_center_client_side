import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './CreditCardForm.css'; // קובץ CSS חדש לעיצוב

const CreditCardForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: ''
  });

  const handleInputChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (data) => {
    alert('Credit Card Data Submitted: ' + JSON.stringify(data));
    // כאן תוכל לשלוח את הנתונים לשרת
  };

  return (
    <div className="credit-card-form-container">
      <h2>Enter Credit Card Information</h2>
      <Cards
        cvc={cardData.cvc}
        expiry={cardData.expiry}
        name={cardData.name}
        number={cardData.number}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="credit-card-form">
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            {...register('number', { required: true, minLength: 16, maxLength: 16 })}
            onChange={handleInputChange}
            className={`form-control ${errors.number ? 'is-invalid' : ''}`}
          />
          {errors.number && <span className="error-message">This field is required and should be 16 digits</span>}
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register('name', { required: true })}
            onChange={handleInputChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <span className="error-message">This field is required</span>}
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            {...register('expiry', { required: true, pattern: /^\d{2}\/\d{2}$/ })}
            onChange={handleInputChange}
            className={`form-control ${errors.expiry ? 'is-invalid' : ''}`}
          />
          {errors.expiry && <span className="error-message">This field is required and should be in MM/YY format</span>}
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            {...register('cvc', { required: true, minLength: 3, maxLength: 4 })}
            onChange={handleInputChange}
            className={`form-control ${errors.cvc ? 'is-invalid' : ''}`}
          />
          {errors.cvc && <span className="error-message">This field is required and should be 3 or 4 digits</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CreditCardForm;

