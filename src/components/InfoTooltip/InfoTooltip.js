import React, { useRef, useEffect } from 'react';
import './InfoTooltip.css';
import errorImg from '../../images/error.png';

const InfoTooltip = ({ error, isOpen, setIsOpen }) => {
  const popup = useRef();

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
    <div ref={popup} onClick={handleLayoutClick} className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <img className="popup__image" src={errorImg} alt="Ошибка при совершении запроса" />
        <h2 className="popup__title">Что-то пошло не так...</h2>
        <p className="popup__text">{error.message}</p>
        <button className="popup__close-button" onClick={closePopup} />
      </div>
    </div>
  );
};

export default InfoTooltip;
