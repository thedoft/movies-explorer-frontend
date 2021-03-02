import React from 'react';
import Header from '../Header/Header';
import './Auth.css';

const Auth = ({ children, title }) => (
  <>
    <Header mod="header_section_auth" />
    <section className="auth">
      <h1 className="auth__title">{title}</h1>
      {children}
    </section>
  </>
);

export default Auth;
