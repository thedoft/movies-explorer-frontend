import React from 'react';
import Auth from '../Auth/Auth';

const Login = () => (
  <Auth
    title="Рады видеть!"
    buttonText="Войти"
    caption="Еще не зарегистрированы?"
    path="/signup"
    linkText="Регистрация"
  >
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor="email">E-mail</label>
      <input type="email" className="form__input" id="email" />
      <label className="form__label" htmlFor="password">Пароль</label>
      <input type="password" className="form__input" id="password" />
    </fieldset>
  </Auth>
);

export default Login;
