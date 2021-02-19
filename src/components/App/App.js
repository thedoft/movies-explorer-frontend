import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/signup">
        {/* <Register /> */}
      </Route>
      <Route path="/signin">
        {/* <Login /> */}
      </Route>
      <Route path="/movies">
        {/* <Movies /> */}
      </Route>
      <Route path="/saved-movies">
        {/* <SavedMovies /> */}
      </Route>
      <Route path="/profile">
        {/* <Profile /> */}
      </Route>
    </Switch>
    <Footer />
  </>
);

export default App;