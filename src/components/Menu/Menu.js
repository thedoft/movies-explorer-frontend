import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = ({
  children, mod = '', navListMod = '', navListItemMod = '', navLinkMod = '',
}) => (
  <nav className={`nav ${mod}`}>
    <ul className={`nav__list ${navListMod}`}>
      {children}
      <li className={`nav__list-item ${navListItemMod}`}>
        <NavLink to="/movies" className={`nav__link ${navLinkMod}`} activeClassName="nav__link_active">Фильмы</NavLink>
      </li>
      <li className={`nav__list-item ${navListItemMod}`}>
        <NavLink to="/saved-movies" className={`nav__link ${navLinkMod}`} activeClassName="nav__link_active">Сохраненные фильмы</NavLink>
      </li>
    </ul>
    <div className="nav__account-container">
      <NavLink to="/profile" className="nav__account-link">Аккаунт</NavLink>
      <span className="nav__account-icon" />
    </div>
  </nav>
);

export default Menu;
