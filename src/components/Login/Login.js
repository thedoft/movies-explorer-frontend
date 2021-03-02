import React from 'react';
import Auth from '../Auth/Auth';
import Form from '../Form/Form';

const Login = () => (
  <>
    <Auth title="Рады видеть!">
      <Form
        buttonText="Войти"
        caption="Еще не зарегистрированы? "
        linkPath="/signup"
        linkText="Регистрация"
      >
        <fieldset className="form__fieldset">
          <label className="form__label" htmlFor="email">E-mail</label>
          <input type="email" className="form__input" id="email" required defaultValue="email@ya.ru" />
          <label className="form__label" htmlFor="password">Пароль</label>
          <input type="password" className="form__input" id="password" required />
        </fieldset>
      </Form>
    </Auth>
  </>
);

export default Login;
