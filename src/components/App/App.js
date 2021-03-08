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

        <ProtectedRoute isLoggedIn={isLoggedIn} path="/movies" component={Movies} setError={setError} setIsInfoTooltipOpen={setIsInfoTooltipOpen} />
        <ProtectedRoute isLoggedIn={isLoggedIn} path="/saved-movies" component={SavedMovies} />
        <ProtectedRoute
          isLoggedIn={isLoggedIn}
          path="/profile"
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
