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

  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration - (durationHours * 60);
  const durationString = `${durationHours}ч ${durationMinutes}м`;

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
      country: country || 'Не указано',
      director: director || 'Не указано',
      duration: duration || 0,
      year: year || 'Не указано',
      description: description || 'Не указано',
      image: image || 'https://djkazu.supervinyl.net/application/files/9914/6139/6114/diary_detail_no_image.png',
      trailer: (trailer && trailer.startsWith('http')) ? trailer : 'https://youtube.com',
      thumbnail: thumbnail || 'https://djkazu.supervinyl.net/application/files/9914/6139/6114/diary_detail_no_image.png',
      nameRU: nameRU || 'Не указано',
      nameEN: nameEN || 'Не указано',
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
        <span className="movie__duration">{durationString}</span>
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
