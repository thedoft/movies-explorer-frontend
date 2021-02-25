import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Form from '../Form/Form';
import './Auth.css';

const Auth = ({
  children, title, buttonText, caption, path, linkText,
}) => (
  <>
    <Header className="header_section_auth" />
    <section className="auth">
      <h1 className="auth__title">{title}</h1>
      <Form buttonText={buttonText}>
        {children}
      </Form>
      <p className="auth__caption">{caption} <Link to={path} className="auth__link">{linkText}</Link></p>
    </section>
  </>
);

export default Auth;
