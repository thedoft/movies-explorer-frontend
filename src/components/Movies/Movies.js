import React, { useState } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = ({
  getMovies, movies, isLoading, isFetched, saveMovie, removeMovie,
}) => (
  <>
    <Header>
      <Navigation />
    </Header>
    <SearchForm getMovies={getMovies} />
    {
      isFetched
        && <MoviesCardList
          movies={movies}
          isLoading={isLoading}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
        />
    }
    <Footer />
  </>
);

export default Movies;
