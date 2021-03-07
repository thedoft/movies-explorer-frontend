import React, { useContext } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Section from '../Section/Section';
import Form from '../Form/Form';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Profile = ({ onSignout, onUpdateProfile }) => {
  const currentUser = useContext(CurrentUserContext);

  const initValues = { name: currentUser.name, email: currentUser.email };

  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation(initValues);

  const isProfileValid = isValid
    && (values.name !== initValues.name || values.email !== initValues.email);

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
          data={values}
          onSubmit={onUpdateProfile}
          isValid={isProfileValid}
        >
          <fieldset className="form__fieldset form__fieldset_section_profile">
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="name">
                Имя
                <input name="name" value={values.name} onChange={handleChange} className="form__input form__input_section_profile" id="name" required autoComplete="current-name" minLength={2} maxLength={30} pattern="^[а-яА-ЯЁё\s\-]+$" />
              </label>
              <span className="form__error">{errors.name}</span>
            </div>
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="email">
                Почта
                <input name="email" value={values.email} onChange={handleChange} type="email" className="form__input form__input_section_profile" id="email" required autoComplete="current-email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
              </label>
              <span className="form__error">{errors.email}</span>
            </div>
          </fieldset>
        </Form>
      </Section>
    </>
  );
};

export default Profile;
