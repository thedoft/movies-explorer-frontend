import React, { useState } from 'react';
import './MoviesCard.css';
import { BASE_URL } from '../../utils/MoviesApi';

const MoviesCard = ({ movie }) => {
  const {
    image, nameRU, duration, trailerLink,
  } = movie;
  const movieImage = image ? (BASE_URL + image.url) : '';

  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    window.open(trailerLink);
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  const handleRemove = () => {
    setIsSaved(false);
  };

  return (
    <li className="movie">
      <img className="movie__image" src={movieImage} alt={nameRU} onClick={handleClick} />
      <div className="movie__text-container">
        <p className="movie__title">{nameRU}</p>
        <span className="movie__duration">{duration}</span>
      </div>
      <button
        className={`movie__save-button ${isSaved && 'movie__saved-icon'}`}
        onClick={!isSaved ? handleSave : handleRemove}
      >
        {!isSaved && 'Cохранить'}
      </button>
    </li>
  );
};

export default MoviesCard;
