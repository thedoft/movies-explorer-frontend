import React, { useState } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Form from '../Form/Form';

const Register = ({ onRegister }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      <Header mod="header_section_auth" />
      <Section mod="section_type_auth" sectionTitle="Добро пожаловать!" sectionTitleMod="section__title_type_auth">
        <Form
          buttonText="Зарегистрироваться"
          caption="Уже зарегистрированы? "
          linkPath="/signin"
          linkText="Войти"
          data={userData}
          onSubmit={onRegister}
        >
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="name">Имя</label>
            <input name="name" value={userData.name} onChange={handleChange} className="form__input" id="name" required minLength={2} maxLength={30} autoComplete="current-name" />
            <label className="form__label" htmlFor="email">E-mail</label>
            <input name="email" value={userData.email} onChange={handleChange} type="email" className="form__input" id="email" required autoComplete="current-email" />
            <label className="form__label" htmlFor="password">Пароль</label>
            <input name="password" value={userData.password} onChange={handleChange} type="password" className="form__input" id="password" required autoComplete="current-password" />
            <span className="form__error"></span>
          </fieldset>
        </Form>
      </Section>
    </>
  );
};

export default Register;
