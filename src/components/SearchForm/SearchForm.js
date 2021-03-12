import React, { useState, useRef } from 'react';
import './SearchForm.css';

const SearchForm = ({ searchMovies }) => {
  const searchError = 'Нужно ввести ключевое слово';

  const [error, setError] = useState('');
  const [movie, setMovie] = useState('');
  const checked = useRef();

  const handleChange = (evt) => {
    setMovie(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!movie) {
      setError(searchError);
    } else {
      setError('');
      searchMovies(movie, checked.current.checked);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">

        <div className="search-form__search-container">
          <div className="search-form__input-container">
            <input value={movie} onChange={handleChange} className="search-form__input" placeholder="Фильм" />
            <button className="search-form__button">Найти</button>
          </div>

          <div className="search-form__checkbox-container">
            <input ref={checked} className="search-form__checkbox" type="checkbox" id="switch" defaultChecked />
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
