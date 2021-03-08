import React, { useState } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as moviesApi from '../../utils/MoviesApi';

const Movies = ({ setError, setIsInfoTooltipOpen }) => {
  const fetchError = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    setIsFetched(true);

    try {
      const fetchedMovies = await moviesApi.getMovies();

      setMovies(fetchedMovies);
    } catch (err) {
      setError({ message: fetchError });
      setIsInfoTooltipOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm getMovies={getMovies} />
      {
        isFetched && <MoviesCardList movies={movies} isLoading={isLoading} />
      }
      <Footer />
    </>
  );
};

export default Movies;
