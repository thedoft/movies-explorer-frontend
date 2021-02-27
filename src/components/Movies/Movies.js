import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { defaultMovies } from '../../utils/defaultMovies';

const isLoading = false;

const Movies = () => (
  <>
    <Header>
      <Navigation />
    </Header>
    <SearchForm />
    <MoviesCardList movies={defaultMovies} />
    <Footer />
    {isLoading && <Preloader />}
  </>
);

export default Movies;
