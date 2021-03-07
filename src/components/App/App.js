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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route path="/signup">
          {!isLoggedIn ? <Register onRegister={handleRegister} /> : <Redirect to="/movies" />}
        </Route>
        <Route path="/signin">
          {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Redirect to="/movies" />}
        </Route>

        <ProtectedRoute isLoggedIn={isLoggedIn} component={Movies} path="/movies" />
        <ProtectedRoute isLoggedIn={isLoggedIn} component={SavedMovies} path="/saved-movies" />
        <ProtectedRoute isLoggedIn={isLoggedIn} component={Profile} path="/profile" onSignout={handleSignout} />

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
