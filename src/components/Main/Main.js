import React from 'react';
import Header from '../Header/Header';
import AuthNav from '../AuthNav/AuthNav';
import Promo from '../Promo/Promo';
import './Main.css';

const Main = () => (
  <>
    <Header className="main__header">
      <AuthNav />
    </Header>
    <Promo />
  </>
);

export default Main;
