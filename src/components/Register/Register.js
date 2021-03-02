import React from 'react';
import Auth from '../Auth/Auth';

const Register = () => (
  <>
    <Auth
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      caption="Уже зарегистрированы?"
      path="/signin"
      linkText="Войти"
    >
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="name">Имя</label>
        <input className="form__input" id="name" required minLength={2} maxLength={30} defaultValue="Игорь" />
        <label className="form__label" htmlFor="email">E-mail</label>
        <input type="email" className="form__input" id="email" required defaultValue="email@ya.ru" />
        <label className="form__label" htmlFor="password">Пароль</label>
        <input type="password" className="form__input form__input_with-error" id="password" required defaultValue="password" />
        <span className="form__error">Что-то пошло не так</span>
      </fieldset>
    </Auth>
  </>
);

export default Register;
