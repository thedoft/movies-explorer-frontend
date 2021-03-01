import React from 'react';
import './SearchForm.css';

const SearchForm = () => (
  <form className="search-form">
    <div className="search-form__container">
      <div className="search-form__search-container">
        <label className="search-form__label">
          <input className="search-form__input" placeholder="Фильм" required />
          <button className="search-form__button">Найти</button>
        </label>
        <div className="search-form__checkbox-container">
          <input className="search-form__checkbox" type="checkbox" id="switch" defaultChecked />
          <label className="search-form__checkbox-label" htmlFor="switch">
            <span className="search-form__checkbox-switch" />
          </label>
          <p className="search-form__checkbox-text">Короткометражки</p>
        </div>
      </div>
    </div>
  </form>
);

export default SearchForm;
