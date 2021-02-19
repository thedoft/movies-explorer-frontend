import React from 'react';
import Section from '../Section/Section';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

const AboutMe = ({ children }) => (
  <Section sectionClass="about-me" sectionTitleClass="about-me__title" sectionTitle="Студент">
    <div className="about-me__two-columns">
      <div className="about-me__left-column">
        <h3 className="about-me__name">Игорь</h3>
        <p className="about-me__summary">Фронтенд-разработчик, 27 лет</p>
        <p className="about-me__description">
          Я родился и живу в Москве, учился в МГТУ им. Баумана.
          Не женат, детей нет. Я люблю музыку и кино, занимаюсь фитнесом.
          Год назад начал кодить. Раньше работал барменом.
          Прошел курс по веб-разработке в Яндекс.Практикум и
          начал заниматься фриланс-заказами.
        </p>
        <ul className="about-me__list">
          <li className="about-me__list-item">
            <a className="about-me__link" href="#">Facebook</a>
          </li>
          <li className="about-me__list-item">
            <a className="about-me__link" href="#">Github</a>
          </li>
        </ul>
      </div>
      <div className="about-me__right-column">
        <img className="about-me__image" src={photo} alt="Фото студента" />
      </div>
    </div>
    {children}
  </Section>
);

export default AboutMe;