import React from 'react';
import './Portfolio.css';

const Portfolio = () => (
  <div className="portfolio">
    <h3 className="portfolio__title">Портфолио</h3>
    <ul className="portfolio__list">
      <li className="portfolio__list-item">
        <a className="portfolio__link" href="#">Статичный сайт</a>
      </li>
      <li className="portfolio__list-item">
        <a className="portfolio__link" href="#">Адаптивный сайт</a>
      </li>
      <li className="portfolio__list-item">
        <a className="portfolio__link" href="#">Одностраничное приложение</a>
      </li>
    </ul>
  </div>
);

export default Portfolio;
