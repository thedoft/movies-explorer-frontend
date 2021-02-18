import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

const Promo = () => (
  <div className="promo">
    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
    <NavTab />
  </div>
);

export default Promo;
