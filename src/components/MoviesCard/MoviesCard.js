import React, { useState, useEffect } from 'react';
import './MoviesCard.css';
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

const MoviesCard = ({
  movie, onSave, onRemove, savedMoviesIds,
}) => {
  const {
    country, director, year, description, image, thumbnail,
    nameRU, nameEN, duration, trailer, movieId,
  } = movie;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (savedMoviesIds && savedMoviesIds.includes(movieId)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedMoviesIds, movieId]);

  const handleClick = () => {
    window.open(trailer);
  };

  const handleSave = () => {
    onSave({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      nameRU,
      nameEN,
      movieId,
    });
  };

  const handleRemove = () => {
    onRemove({ movieId });
  };

  return (
    <li className="movie">
      <img className="movie__image" src={image || defaultMovieImage} alt={nameRU} onClick={handleClick} />
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
