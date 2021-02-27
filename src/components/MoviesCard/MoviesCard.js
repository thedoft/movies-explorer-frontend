import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ movie, saved = false }) => (
  <li className="movie">
    <img className="movie__image" src={movie.image} />
    <div className="movie__text-container">
      <p className="movie__title">{movie.title}</p>
      <span className="movie__duration">{movie.duration}</span>
    </div>
    {
      saved
        ? <button className="movie__button movie__button_type_remove" />
        : <button className="movie__button movie__button_type_save">Cохранить</button>
    }
  </li>
);

export default MoviesCard;
