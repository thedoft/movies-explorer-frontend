import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => (
  <Link to="#about-project">
    <button className="nav-tab">Узнать больше</button>
  </Link>
);

export default NavTab;
