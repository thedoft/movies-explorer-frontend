import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as api from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import filterSearch from '../../utils/utils';
import { fetchError } from '../../utils/constants';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await api.getUserData();

        setCurrentUser(user);
        setIsLoggedIn(true);
      } catch (err) {
        setIsLoggedIn(false);
        setCurrentUser({});
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    const fetchedMovies = JSON.parse(localStorage.getItem('fetchedMovies'));

    if (fetchedMovies) {
      setMovies(fetchedMovies);
      setIsFetched(true);
    }
  }, []);

  const handleLogin = async (userData) => {
    try {
      const user = await api.login(userData);

      setCurrentUser(user);
      setIsLoggedIn(true);
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  const handleRegister = async (userData) => {
    try {
      await api.register(userData);

      handleLogin({ email: userData.email, password: userData.password });
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  const handleSignout = async () => {
    try {
      await api.logout();

      setIsLoggedIn(false);
      setCurrentUser({});

      localStorage.clear();
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  const handleUpdateProfile = async (userData) => {
    try {
      const user = await api.updateProfile(userData);

      setCurrentUser(user);
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  const searchMovies = async (keyword, isIncludesShorts) => {
    setIsLoading(true);
    setIsFetched(true);

    try {
      let fetchedMovies = await moviesApi.getMovies();

      fetchedMovies = filterSearch(fetchedMovies, keyword, isIncludesShorts);

      const formattedFetchedMovies = fetchedMovies.map((movie) => {
        const formattedMovie = {
          ...movie,
          movieId: movie.id,
          image: movie.image ? (moviesApi.BASE_URL + movie.image.url) : '',
          thumbnail: movie.image ? (moviesApi.BASE_URL + movie.image.formats.thumbnail.url) : '',
          trailer: movie.trailerLink,
        };

        return formattedMovie;
      });

      setMovies(formattedFetchedMovies);
      localStorage.setItem('fetchedMovies', JSON.stringify(formattedFetchedMovies));
    } catch (err) {
      setError({ message: fetchError });
      setIsInfoTooltipOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getSavedMovies = async () => {
    try {
      const fetchedSavedMovies = await api.getMovies();

      const fetchedSavedMoviesIds = fetchedSavedMovies.map((movie) => movie.movieId);

      setSavedMovies(fetchedSavedMovies);
      setSavedMoviesIds(fetchedSavedMoviesIds);
      setFilteredSavedMovies(fetchedSavedMovies);
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn]);

  const searchSavedMovies = (keyword, isIncludesShorts) => {
    const searchedMovies = filterSearch(savedMovies, keyword, isIncludesShorts);

    setFilteredSavedMovies(searchedMovies);
  };

  const saveMovie = async (movieData) => {
    try {
      const savedMovie = await api.saveMovie(movieData);

      setSavedMovies([...savedMovies, savedMovie]);
      setSavedMoviesIds([...savedMoviesIds, savedMovie.movieId]);
      setFilteredSavedMovies([...savedMovies, savedMovie]);
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  const removeMovie = async (movieId) => {
    try {
      const removedMovie = await api.removeMovie(movieId);

      const filteredMovies = savedMovies.filter((movie) => movie.movieId !== removedMovie.movieId);
      const filteredMoviesIds = savedMoviesIds.filter((id) => id !== removedMovie.movieId);

      setSavedMovies(filteredMovies);
      setSavedMoviesIds(filteredMoviesIds);
      setFilteredSavedMovies(filteredMovies);
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main isLoggedIn={isLoggedIn} />
        </Route>

        <Route path="/signup">
          {!isLoggedIn ? <Register onRegister={handleRegister} /> : <Redirect to="/movies" />}
        </Route>
        <Route path="/signin">
          {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Redirect to="/movies" />}
        </Route>

        <ProtectedRoute
          path="/movies"
          isLoggedIn={isLoggedIn}
          component={Movies}
          isFetched={isFetched}
          isLoading={isLoading}
          searchMovies={searchMovies}
          movies={movies}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
          savedMoviesIds={savedMoviesIds}
        />

        <ProtectedRoute
          path="/saved-movies"
          isLoggedIn={isLoggedIn}
          component={SavedMovies}
          searchMovies={searchSavedMovies}
          movies={filteredSavedMovies}
          removeMovie={removeMovie}
          savedMoviesIds={savedMoviesIds}
        />

        <ProtectedRoute
          path="/profile"
          isLoggedIn={isLoggedIn}
          component={Profile}
          onSignout={handleSignout}
          onUpdateProfile={handleUpdateProfile}
        />

        <Route path='*' component={NotFound} />
      </Switch>

      <InfoTooltip
        error={error}
        isOpen={isInfoTooltipOpen}
        setIsOpen={setIsInfoTooltipOpen}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
