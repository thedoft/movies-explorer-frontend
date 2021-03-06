import React, { useContext } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Section from '../Section/Section';
import Form from '../Form/Form';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const Profile = ({ onSignout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Section mod="profile" sectionTitleMod="profile__title" sectionTitle={`Привет, ${currentUser.name}!`}>
        <Form
          buttonText="Редактировать"
          submitButtonMod="form__submit-button_section_profile"
          linkPath="/"
          linkText="Выйти из аккаунта"
          linkMod="form__link_type_exit"
          onLinkClick={onSignout}
        >
          <fieldset className="form__fieldset form__fieldset_section_profile">
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="name">Имя</label>
              <input className="form__input form__input_section_profile" id="name" required autoComplete="current-name" />
            </div>
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="email">Почта</label>
              <input type="email" className="form__input form__input_section_profile" id="email" required autoComplete="current-email" />
            </div>
          </fieldset>
        </Form>
      </Section>
    </>
  );
};

export default Profile;
