import React from 'react';
import Header from '../Header/Header';
import AuthNav from '../AuthNav/AuthNav';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';

const Main = () => (
  <>
    <Header className="main__header">
      <AuthNav />
    </Header>
    <Promo />
    <AboutProject />
    <Techs />
    <AboutMe>
      <Portfolio />
    </AboutMe>
  </>
);

export default Main;
