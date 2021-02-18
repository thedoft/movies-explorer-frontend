import React from 'react';
import { Link } from 'react-router-dom';
import './AuthNav.css';

const AuthNav = () => (
  <div className="auth-nav">
    <Link to="/signup" className="auth-nav__link">Регистрация</Link>
    <Link to="/signin">
      <button className="auth-nav__link auth-nav__button">Войти</button>
    </Link>
  </div>
);

export default AuthNav;
