import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const Movies = () => (
  <>
    <Header>
      <Navigation />
    </Header>
    <SearchForm />
    <Footer />
  </>
);

export default Movies;
