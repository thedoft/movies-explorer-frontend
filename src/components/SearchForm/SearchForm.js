import React from 'react';
import './SearchForm.css';

const SearchForm = () => (
  <form className="search-form">
    <div className="search-form__container">
      <div className="search-form__search-container">
        <label className="search-form__label">
          <input className="search-form__input" placeholder="Фильм" />
          <button className="search-form__button">Найти</button>
        </label>
        <div className="search-form__checkbox-container">
          <label className="search-form__checkbox search-form__checkbox_checked" htmlFor="switch">
            <input className="search-form__checkbox-input" type="checkbox" id="switch" defaultChecked />
            <span className="search-form__visible-checkbox" />
          </label>
          <p className="search-form__checkbox-label">Короткометражки</p>
        </div>
      </div>
    </div>
  </form>
);

export default SearchForm;
