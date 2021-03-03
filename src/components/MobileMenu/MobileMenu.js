import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './MobileMenu.css';

const MobileMenu = () => (
  <div className="mobile-menu">
    <input className="mobile-menu__checkbox" type="checkbox" id="checkbox" />
    <label className="mobile-menu__label" htmlFor="checkbox">
      <span className="mobile-menu__button" />
    </label>

    <div className="mobile-menu__nav-container">
      <Menu
        mod="mobile-menu__nav"
        navListMod="mobile-menu__nav-list"
        navListItemMod="mobile-menu__nav-list-item"
        navLinkMod="mobile-menu__nav-link"
      >
        <li className="nav__list-item mobile-menu__nav-list-item">
          <NavLink exact to="/" className="nav__link mobile-menu__nav-link" activeClassName="mobile-menu__nav-link_active">Главная</NavLink>
        </li>
      </Menu>
    </div>
  </div>
);

export default MobileMenu;
