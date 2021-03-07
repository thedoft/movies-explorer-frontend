import React, { useEffect } from 'react';
import './InfoTooltip.css';
import errorImg from '../../images/error.png';

const InfoTooltip = ({ error, isOpen, setIsOpen }) => {
  const closePopup = () => {
    setIsOpen(false);
  };

  const handleLayoutClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  };

  const handleEscapeTap = (evt) => {
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleEscapeTap);

    return () => {
      document.removeEventListener('keyup', handleEscapeTap);
    };
  });

  return (
    <div onClick={handleLayoutClick} className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <img className="popup__image" src={errorImg} alt="Ошибка при совершении запроса" />
        <p className="popup__text">{error.message}</p>
        <button className="popup__close-button" onClick={closePopup} />
      </div>
    </div>
  );
};

export default InfoTooltip;
