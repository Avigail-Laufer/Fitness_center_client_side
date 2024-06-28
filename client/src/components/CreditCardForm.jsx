import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './CreditCardForm.css'; // קובץ CSS חדש לעיצוב
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import axios from "axios";
const CreditCardForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { id } = useParams();
  const { firstName } = useParams();
  const { lastName } = useParams();
  const { email } = useParams();
  const { fhone } = useParams();
  const {TypeMember } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    number: ''
  });

  const handleInputChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value
    });
  };
  const idCard={};
  const onSubmit =async (data) => {
   
  await axios.post("http://localhost:5168/api/credit-card",cardData )

      .then(response => {
        
          debugger
          idCard=response.data.id
          console.log("Post created:", response.data)
      }
      )
      .catch(error => console.log(error))
      const formData = {
        id: id,
        IdTypeMember: TypeMember,
        firstName: firstName,
        lastName: lastName,
        email: email,
        fhone: fhone,
        codeCard:idCard
    };
  
      await axios.post("http://localhost:5168/api/client", formData)

      .then(response => {
        

          navigate(`/SuccessPage`)
          console.log("Post created:", response.data)
      }
      )
      .catch(error => console.log(error))
  };


  return (
    <div className="credit-card-form-container">
      <h2>Enter Credit Card Information</h2>
      <Cards
        cvc={cardData.cvc}
        expiry={cardData.expiry}
        // name={cardData.name} // אם אתה צריך גם את השם, יש להוסיף את השדה הזה
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