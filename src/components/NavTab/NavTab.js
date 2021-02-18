import React from 'react';
import './NavTab.css';

const NavTab = ({ className }) => (
  <a href="#about-project" className={className}>
    <button className="nav-tab">Узнать больше</button>
  </a>
);

export default NavTab;
