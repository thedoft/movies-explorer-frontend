import React, { useState } from 'react';
import './MoviesCard.css';
import { BASE_URL } from '../../utils/MoviesApi';

const MoviesCard = ({ movie, isRemovable = false }) => {
  const {
    image, nameRU, duration, trailerLink,
  } = movie;
  const movieImage = image ? (BASE_URL + image.url) : '';

  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    window.open(trailerLink);
  };

  const handleSaveMovie = () => {
    setIsSaved(true);
  };

  return (
    <li className="movie">
      <img className="movie__image" src={movieImage} alt={nameRU} onClick={handleClick} />
      <div className="movie__text-container">
        <p className="movie__title">{nameRU}</p>
        <span className="movie__duration">{duration}</span>
      </div>
        {!isSaved && <button className="movie__button movie__button_type_save" onClick={handleSaveMovie}>Cохранить</button>}
        {(isSaved && isRemovable) && <button className="movie__button movie__button_type_remove" />}
        {(isSaved && !isRemovable) && <span className="movie__button movie__saved-icon" />}
    </li>
  );
};

export default MoviesCard;
