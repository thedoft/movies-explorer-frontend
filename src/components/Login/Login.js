import React from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Login = ({ onLogin }) => {
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation({ name: '', email: '', password: '' });

  const handleFocus = (evt) => {
    evt.target.removeAttribute('readonly');
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
          data={values}
          onSubmit={onLogin}
          isValid={isValid}
        >
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="email">E-mail</label>
            <input name="email" value={values.email} onChange={handleChange} type="email" className="form__input" id="email" required autoComplete="current-email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" readOnly onFocus={handleFocus} />
            <span className="form__error">{errors.email}</span>

            <label className="form__label" htmlFor="password">Пароль</label>
            <input name="password" value={values.password} onChange={handleChange} type="password" className="form__input" id="password" required minLength={4} autoComplete="current-password" />
            <span className="form__error">{errors.password}</span>
          </fieldset>
        </Form>
      </Section>
    </>
  );
};

export default Login;
