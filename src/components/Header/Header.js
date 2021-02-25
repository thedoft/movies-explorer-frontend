import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = ({ children, className = '' }) => (
  <header className={`header ${className}`}>
    <Logo />
    {children}
  </header>
);

export default Header;
