import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { defaultMoviesShort } from '../../utils/defaultMovies';

const SavedMovies = () => (
  <>
    <Header>
      <Navigation />
    </Header>
    <SearchForm />
    <MoviesCardList movies={defaultMoviesShort} isRemovable />
    <Footer />
  </>
);

export default SavedMovies;
