import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

const Promo = () => (
  <section className="promo">
    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки</h1>
    <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
    <NavTab className="promo__nav-tab" />
  </section>
);

export default Promo;
