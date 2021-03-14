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
import { searchByKeyword, reformatMovies } from '../../utils/utils';
import { fetchErrorMessage, successMessage } from '../../utils/constants';
import successImg from '../../images/success.png';
import errorImg from '../../images/error.png';

const App = () => {
  const [isTokenChecked, setIsTokenChecked] = useState(false); // eslint-disable-line
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [infoTooltipImage, setInfoTooltipImage] = useState('');

  const showError = (msg) => {
    setMessage(msg);
    setInfoTooltipImage(errorImg);
    setIsInfoTooltipOpen(true);
  };

  const showSuccess = () => {
    setMessage(successMessage);
    setInfoTooltipImage(successImg);
    setIsInfoTooltipOpen(true);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await api.getUserData();

        setCurrentUser(user);
        setIsLoggedIn(true);
      } catch (err) {
        setCurrentUser({});
        setIsLoggedIn(false);
      } finally {
        setIsTokenChecked(true);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    const localSearchedMovies = localStorage.getItem('searchedMovies');

    if (isLoggedIn && localSearchedMovies) {
      setSearchedMovies(JSON.parse(localSearchedMovies));
      setIsFetched(true);
    }
  }, [isLoggedIn]);

  const handleLogin = async (userData) => {
    try {
      setIsFormDisabled(true);

      const user = await api.login(userData);

      setCurrentUser(user);
      setIsLoggedIn(true);
    } catch (err) {
      showError(err.message);
    } finally {
      setIsFormDisabled(false);
    }
  };

  const handleRegister = async (userData) => {
    try {
      setIsFormDisabled(true);

      await api.register(userData);

      handleLogin({ email: userData.email, password: userData.password });
    } catch (err) {
      showError(err.message);
    } finally {
      setIsFormDisabled(false);
    }
  };

  const handleSignout = async () => {
    try {
      await api.logout();

      setIsLoggedIn(false);
      setCurrentUser({});

      localStorage.clear();
      setSearchedMovies([]);
      setIsFetched(false);
    } catch (err) {
      showError(err.message);
    }
  };

  const handleUpdateProfile = async (userData) => {
    try {
      setIsFormDisabled(true);

      const user = await api.updateProfile(userData);

      setCurrentUser(user);
      showSuccess();
    } catch (err) {
      showError(err.message);
    } finally {
      setIsFormDisabled(false);
    }
  };

  const searchMovies = async (keyword, isIncludesShort) => {
    setIsLoading(true);
    setIsFetched(true);

    try {
      let movies = localStorage.getItem('movies');

      if (!movies) {
        const fetchedMovies = await moviesApi.getMovies();
        const formattedFetchedMovies = reformatMovies(fetchedMovies, moviesApi.BASE_URL);

        localStorage.setItem('movies', JSON.stringify(formattedFetchedMovies));
        movies = formattedFetchedMovies;
      } else {
        movies = JSON.parse(movies);
      }
      const filteredMovies = searchByKeyword(movies, keyword, isIncludesShort);

      setSearchedMovies(filteredMovies);
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
    } catch (err) {
      showError(fetchErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let cleanupFunction = false;

    const getSavedMovies = async () => {
      try {
        const fetchedSavedMovies = await api.getMovies();

        const fetchedSavedMoviesIds = fetchedSavedMovies.map((movie) => movie.movieId);

        if (!cleanupFunction) {
          setSavedMovies(fetchedSavedMovies);
          setSavedMoviesIds(fetchedSavedMoviesIds);
          setSearchedSavedMovies(fetchedSavedMovies);
        }
      } catch (err) {
        showError(err.message);
      }
    };

    if (isLoggedIn) {
      getSavedMovies();
    }

    return () => {
      cleanupFunction = true;
    };
  }, [isLoggedIn]);

  const searchSavedMovies = (keyword, isIncludesShort) => {
    const filteredSavedMovies = searchByKeyword(savedMovies, keyword, isIncludesShort);

    setSearchedSavedMovies(filteredSavedMovies);
  };

  const saveMovie = async (movieData) => {
    try {
      const savedMovie = await api.saveMovie(movieData);

      setSavedMovies([...savedMovies, savedMovie]);
      setSavedMoviesIds([...savedMoviesIds, savedMovie.movieId]);
      setSearchedSavedMovies([...savedMovies, savedMovie]);
    } catch (err) {
      showError(err.message);
    }
  };

  const removeMovie = async (movieId) => {
    try {
      const removedMovie = await api.removeMovie(movieId);

      const filteredMovies = savedMovies.filter((movie) => movie.movieId !== removedMovie.movieId);
      const filteredMoviesIds = savedMoviesIds.filter((id) => id !== removedMovie.movieId);

      setSavedMovies(filteredMovies);
      setSavedMoviesIds(filteredMoviesIds);
      setSearchedSavedMovies(filteredMovies);
    } catch (err) {
      showError(err.message);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isTokenChecked
        && <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} />
          </Route>

          <Route path="/signup">
            {!isLoggedIn
              ? <Register
                onRegister={handleRegister}
                isFormDisabled={isFormDisabled}
              />
              : <Redirect to="/movies" />
            }
          </Route>

          <Route path="/signin">
            {!isLoggedIn
              ? <Login
                onLogin={handleLogin}
                isFormDisabled={isFormDisabled}
              /> : <Redirect to="/movies" />
            }
          </Route>

          <ProtectedRoute
            path="/movies"
            isLoggedIn={isLoggedIn}
            component={Movies}
            isFetched={isFetched}
            isLoading={isLoading}
            searchMovies={searchMovies}
            movies={searchedMovies}
            saveMovie={saveMovie}
            removeMovie={removeMovie}
            savedMoviesIds={savedMoviesIds}
          />

          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            component={SavedMovies}
            searchMovies={searchSavedMovies}
            movies={searchedSavedMovies}
            removeMovie={removeMovie}
            savedMoviesIds={savedMoviesIds}
          />

          <ProtectedRoute
            path="/profile"
            isLoggedIn={isLoggedIn}
            component={Profile}
            onSignout={handleSignout}
            onUpdateProfile={handleUpdateProfile}
            isFormDisabled={isFormDisabled}
          />

          <Route path='*' component={NotFound} />
        </Switch>
      }

      <InfoTooltip
        image={infoTooltipImage}
        message={message}
        isOpen={isInfoTooltipOpen}
        setIsOpen={setIsInfoTooltipOpen}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
