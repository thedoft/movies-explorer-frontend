import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Form from '../Form/Form';
import './Profile.css';

const Profile = () => {
  const userName = 'Игорь';

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className="profile">
        <h1 className="profile__title">Привет, {userName}!</h1>
        <Form
          buttonText="Редактировать"
          submitButtonMod="form__submit-button_section_profile"
          linkPath="/signin"
          linkText="Выйти из аккаунта"
          linkMod="form__link_type_exit"
        >
          <fieldset className="form__fieldset form__fieldset_section_profile">
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="name">Имя</label>
              <input className="form__input form__input_section_profile" id="name" defaultValue="Игорь" required />
            </div>
            <div className="form__input-container">
              <label className="form__label form__label_section_profile" htmlFor="email">Почта</label>
              <input type="email" className="form__input form__input_section_profile" id="email" defaultValue="example@ya.ru" required />
            </div>
          </fieldset>
        </Form>
      </section>
    </>
  );
};

export default Profile;
