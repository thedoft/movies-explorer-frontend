import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = ({
  getMovies, movies, saveMovie, removeMovie, getSavedMovies, isFetched, isLoading,
}) => {
  useEffect(() => {
    getSavedMovies();
  }, [getSavedMovies]);

  return (
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
};

export default Movies;
