import React from 'react';
import Auth from '../Auth/Auth';

const Register = () => (
  <Auth
    title="Добро пожаловать!"
    buttonText="Зарегистрироваться"
    caption="Уже зарегистрированы?"
    path="/signin"
    linkText="Войти"
  >
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor="name">Имя</label>
      <input className="form__input" id="name" />
      <label className="form__label" htmlFor="email">E-mail</label>
      <input type="email" className="form__input" id="email" />
      <label className="form__label" htmlFor="password">Пароль</label>
      <input type="password" className="form__input" id="password" />
      <span className="form__error"></span>
    </fieldset>
  </Auth>
);

export default Register;
