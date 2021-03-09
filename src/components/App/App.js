import React, { useState, useEffect } from 'react';
import {
  Switch, Route, Redirect, useHistory,
} from 'react-router-dom';
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

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleRegister = async ({ name, email, password }) => {
    try {
      const user = await api.register({ name, email, password });

      setCurrentUser(user);
      setIsLoggedIn(true);
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const user = await api.login({ email, password });

      setCurrentUser(user);
      setIsLoggedIn(true);
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
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

  const handleUpdateProfile = async ({ name, email }) => {
    try {
      const user = await api.updateProfile({ name, email });

      setCurrentUser(user);
    } catch (err) {
      setError(err);
      setIsInfoTooltipOpen(true);
    }
  };

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

  const saveMovie = async (movieData) => {
    await api.saveMovie(movieData);
    const m = await api.getMovies();
    console.log(m);
  };

  const removeMovie = async (movieId) => {
    await api.removeMovie(movieId);
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
          getMovies={getMovies}
          movies={movies}
          isFetched={isFetched}
          isLoading={isLoading}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
        />

        <ProtectedRoute
          path="/saved-movies"
          isLoggedIn={isLoggedIn}
          component={SavedMovies}
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
