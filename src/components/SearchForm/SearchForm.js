import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ getMovies }) => {
  const searchError = 'Нужно ввести ключевое слово';

  const [film, setFilm] = useState('');
  const [error, setError] = useState('');

  const handleChange = (evt) => {
    setFilm(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!film) {
      setError(searchError);
    } else {
      setError('');
      getMovies();
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">

        <div className="search-form__search-container">
          <div className="search-form__input-container">
            <input value={film} onChange={handleChange} className="search-form__input" placeholder="Фильм" />
            <button className="search-form__button">Найти</button>
          </div>

          <div className="search-form__checkbox-container">
            <input className="search-form__checkbox" type="checkbox" id="switch" defaultChecked />
            <label className="search-form__checkbox-label" htmlFor="switch">
              <span className="search-form__checkbox-switch" />
            </label>
            <p className="search-form__checkbox-text">Короткометражки</p>
          </div>

        </div>
        <span className="search-form__error">{error}</span>
      </div>
    </form>
  );
};

export default SearchForm;
