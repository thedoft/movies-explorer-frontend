import React from 'react';
import './Section.css';

const Section = ({
  children, sectionClass, sectionTitleClass, sectionTitle, id,
}) => (
  <section className={`section ${sectionClass}`} id={id}>
    <h2 className={`section__title ${sectionTitleClass}`}>{sectionTitle}</h2>
    {children}
  </section>
);

export default Section;
