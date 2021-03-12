import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = ({
  getMovies, movies, saveMovie, removeMovie, isFetched, isLoading, savedMoviesIds,
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
          savedMoviesIds={savedMoviesIds}
        />
    }
    <Footer />
  </>
);

export default Movies;
