import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import defaultMovies from '../../utils/defaultMovies';

const MoviesCardList = () => (
  <section className="movies">
    <ul className="movies__list">
      {defaultMovies.map((movie, index) => (
        <MoviesCard movie={movie} key={index} saved={index % 2 !== 0} />
      ))}
    </ul>
    <button className="movies__more-button">Еще</button>
  </section>
);

export default MoviesCardList;
