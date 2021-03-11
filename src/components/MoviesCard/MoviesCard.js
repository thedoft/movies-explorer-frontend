import React, { useState, useEffect } from 'react';
import './MoviesCard.css';
import { BASE_URL } from '../../utils/MoviesApi';

const MoviesCard = ({ movie, onSave, onRemove }) => {
  const {
    country, director, year, description, image,
    nameRU, nameEN, duration, trailerLink, id,
  } = movie;
  const movieImage = image ? (BASE_URL + image.url) : '';
  const movieThumbnail = image ? (BASE_URL + image.formats.thumbnail.url) : '';

  const [savedMoviesIds, setSavedMoviesIds] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const localSavedMoviesIds = JSON.parse(localStorage.getItem('savedMoviesIds'));

    if (localSavedMoviesIds.includes(id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [id]);

  const handleClick = () => {
    window.open(trailerLink);
  };

  const handleSave = async () => {
    onSave({
      country,
      director,
      duration,
      year,
      description,
      image: movieImage,
      trailer: trailerLink,
      thumbnail: movieThumbnail,
      nameRU,
      nameEN,
      movieId: id,
    });

    await setSavedMoviesIds([...savedMoviesIds, id]);
    setIsSaved(true);
  };

  const handleRemove = () => {
    onRemove({ movieId: id });

    const filteredSavedMoviesIds = savedMoviesIds.filter((movieId) => movieId !== id);

    setSavedMoviesIds(filteredSavedMoviesIds);
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
