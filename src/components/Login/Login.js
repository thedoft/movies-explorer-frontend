import React, { useState } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Form from '../Form/Form';

const Login = ({ onLogin }) => {
  const [userData, setUserData] = useState({
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
      <Section mod="section_type_auth" sectionTitle="Рады видеть!" sectionTitleMod="section__title_type_auth">
        <Form
          buttonText="Войти"
          caption="Еще не зарегистрированы? "
          linkPath="/signup"
          linkText="Регистрация"
          data={userData}
          onSubmit={onLogin}
        >
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="email">E-mail</label>
            <input name="email" value={userData.email} onChange={handleChange} type="email" className="form__input" id="email" required />
            <label className="form__label" htmlFor="password">Пароль</label>
            <input name="password" value={userData.password} onChange={handleChange} type="password" className="form__input" id="password" required />
          </fieldset>
        </Form>
      </Section>
    </>
  );
};

export default Login;
