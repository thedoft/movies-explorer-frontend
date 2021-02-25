import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Auth.css';

const AuthSection = ({
  children, title, buttonText, caption, path, link,
}) => (
  <>
    <Header className="header_section_auth" />
    <section className="auth">
      <h1 className="auth__title">{title}</h1>
      <form className="auth__form">
        {children}
        <button className="auth__submit-button">{buttonText}</button>
        <p className="auth__caption">{caption} <Link to={path} className="auth__link">{link}</Link></p>
      </form>
    </section>
  </>
);

export default AuthSection;
