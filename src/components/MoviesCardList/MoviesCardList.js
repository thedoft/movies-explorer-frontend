import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

const MoviesCardList = ({
  movies, isRemovable, isLoading,
}) => {
  const moviesLength = document.querySelectorAll('movie').length;

  return (
    <section className="movies">
      {isLoading && <Preloader />}
      {
        (!isLoading && movies)
          && <ul className="movies__list">
            {
              movies.map((movie, index) => (
                <MoviesCard movie={movie} key={index} isRemovable={isRemovable} />
              ))
            }
          </ul>
      }
      {
        (!isLoading && !movies) && <p className="movies__error">Ничего не найдено</p>
      }
      {
        (movies.length > 3 && moviesLength !== movies.length) && <button className="movies__more-button">Еще</button>
      }
    </section>
  );
};

export default MoviesCardList;
