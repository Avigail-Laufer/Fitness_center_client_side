import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './ContactUs.css'; // קובץ CSS לעיצוב

export default function ContactUs() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      navigate(`/TypeMember/${data.id}/${data.firstName}/${data.lastName}/${data.email}/${data.fhone}`);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label>ID:</label>
          <input
            maxLength={9}
            type="text"
            name="id"
            {...register('id', { 
              required: "ID is required", 
              validate: {
                length: value => value.length === 9 || "ID must be exactly 9 digits",
                digits: value => /^\d+$/.test(value) || "ID must contain only digits"
              }
            })}
            className={`form-control ${errors.id ? 'is-invalid' : ''}`}
          />
          {errors.id && <span className="error-message">{errors.id.message}</span>}
        </div>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            {...register('firstName', { required: "First Name is required" })}
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          />
          {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            {...register('lastName', { required: "Last Name is required" })}
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          />
          {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="fhone"
            {...register('fhone', { required: "Phone number is required" })}
            className={`form-control ${errors.fhone ? 'is-invalid' : ''}`}
          />
          {errors.fhone && <span className="error-message">{errors.fhone.message}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" } })}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <button type="submit" className="btn submit-button">Submit</button>
      </form>
    </div>
  );
}