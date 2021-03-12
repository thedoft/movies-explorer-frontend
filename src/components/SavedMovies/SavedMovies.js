import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = ({ movies, removeMovie, savedMoviesIds }) => (
  <>
    <Header>
      <Navigation />
    </Header>
    <SearchForm />
    <MoviesCardList movies={movies} removeMovie={removeMovie} savedMoviesIds={savedMoviesIds} />
    <Footer />
  </>
);

export default SavedMovies;
