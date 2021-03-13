import React from 'react';
import Header from '../Header/Header';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import './Main.css';

const Main = ({ isLoggedIn }) => (
  <>
    <Header mod="header_section_main">
      {
        !isLoggedIn ? <AuthNav /> : <Navigation />
      }
    </Header>
    <Promo />
    <AboutProject />
    <Techs />
    <AboutMe>
      <Portfolio />
    </AboutMe>
    <Footer />
  </>
);

export default Main;
