import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = () => (
  <section className="movies">
    <ul className="movies__list">
      <MoviesCard saved />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard saved />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard saved />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </ul>
    <button className="movies__more-button">Еще</button>
  </section>
);

export default MoviesCardList;
