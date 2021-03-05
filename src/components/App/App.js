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
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async ({ name, email, password }) => {
    try {
      const user = await api.register({ name, email, password });

      if (user) {
        history.push('/signin');
      }
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
          {!isLoggedIn ? <Login /> : <Redirect to="/movies" />}
        </Route>

        <ProtectedRoute isLoggedIn={isLoggedIn} component={Movies} path="/movies" />
        <ProtectedRoute isLoggedIn={isLoggedIn} component={SavedMovies} path="/saved-movies" />
        <ProtectedRoute isLoggedIn={isLoggedIn} component={Profile} path="/profile" />

        <Route path='*' component={NotFound} />
      </Switch>

      <InfoTooltip error={error} isOpen={isInfoTooltipOpen} />
    </CurrentUserContext.Provider>
  );
};

export default App;
