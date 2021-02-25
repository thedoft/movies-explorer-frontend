import React from 'react';
import './Form.css';

const Form = ({ children, buttonText }) => (
  <form className="form">
    {children}
    <button className="form__submit-button">{buttonText}</button>
  </form>
);

export default Form;
