import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link to="/movies" className="nav__link">Фильмы</Link>
      </li>
      <li className="nav__list-item">
        <Link to="/saved-movies" className="nav__link">Сохраненные фильмы</Link>
      </li>
    </ul>
    <div className="nav__account-container">
      <Link to="/profile" className="nav__account-link">Аккаунт</Link>
      <span className="nav__account-icon" />
    </div>
  </nav>
);

export default Navigation;
