import React, { useState, useEffect } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ movie, onSave, onRemove }) => {
  const {
    country, director, year, description, image, thumbnail,
    nameRU, nameEN, duration, trailer, movieId,
  } = movie;

  const [savedMoviesIds, setSavedMoviesIds] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const localSavedMoviesIds = JSON.parse(localStorage.getItem('savedMoviesIds'));

    if (localSavedMoviesIds && localSavedMoviesIds.includes(movieId)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [movieId]);

  const handleClick = () => {
    window.open(trailer);
  };

  const handleSave = async () => {
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

    await setSavedMoviesIds([...savedMoviesIds, movieId]);
    setIsSaved(true);
  };

  const handleRemove = () => {
    onRemove({ movieId });

    const filteredSavedMoviesIds = savedMoviesIds.filter((id) => id !== movieId);

    setSavedMoviesIds(filteredSavedMoviesIds);
    setIsSaved(false);
  };

  return (
    <li className="movie">
      <img className="movie__image" src={image} alt={nameRU} onClick={handleClick} />
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
