import React from 'react';
import './MoviesCard.css';
import image from '../../images/photo.jpg';

const MoviesCard = ({ saved = false }) => (
  <li className="movie">
    <img className="movie__image" src={image} />
    <div className="movie__text-container">
      <p className="movie__title">Gimme Danger: История Игги и The Stooges</p>
      <span className="movie__duration">1h 17m</span>
    </div>
    {
      saved
        ? <button className="movie__button movie__button_type_remove" />
        : <button className="movie__button movie__button_type_save">Cохранить</button>
    }
  </li>
);

export default MoviesCard;
