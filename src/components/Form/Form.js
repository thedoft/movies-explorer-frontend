import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = ({
  children, submitButtonMod = '', buttonText, caption = '',
  linkPath, linkText, linkMod = '', onLinkClick = () => {},
  data = null, onSubmit, isValid, isFormDisabled,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
      <button
        className={`
          form__submit-button ${submitButtonMod}
          ${(!isValid || isFormDisabled) && 'form__submit-button_inactive'}
        `}
      >
        {buttonText}
      </button>
      <p className="form__caption">
        {caption}
        <Link to={linkPath} onClick={onLinkClick} className={`form__link ${linkMod}`}>{linkText}</Link>
      </p>
    </form>
  );
};

export default Form;
