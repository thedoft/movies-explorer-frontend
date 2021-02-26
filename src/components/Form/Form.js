import React from 'react';
import './Form.css';

const Form = ({
  children, submitButtonMod = '', buttonText,
}) => (
  <form className="form">
    {children}
    <button className={`form__submit-button ${submitButtonMod}`}>{buttonText}</button>
  </form>
);

export default Form;
