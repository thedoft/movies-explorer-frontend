import React from 'react';
import Tech from '../Tech/Tech';
import './Techs.css';

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

const Techs = () => (
  <section className="section techs">
    <h1 className="section__title techs__title">Технологии</h1>
    <h2 className="techs__subtitle">7 технологий</h2>
    <p className="section__text techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте</p>
    <ul className="techs__list">
      {techs.map((tech, index) => (
        <li className="techs__list-item" key={index}>
          <Tech tech={tech} />
        </li>
      ))}
    </ul>
  </section>
);

export default Techs;
