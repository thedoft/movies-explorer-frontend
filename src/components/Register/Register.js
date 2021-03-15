import React from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const Register = ({ onRegister, isFormDisabled }) => {
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation({ name: '', email: '', password: '' });

  const handleFocus = (evt) => {
    evt.target.removeAttribute('readonly');
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
          data={values}
          onSubmit={onRegister}
          isValid={isValid}
          isFormDisabled={isFormDisabled}
        >
          <fieldset className="form__fieldset" disabled={isFormDisabled}>
            <label className="form__label" htmlFor="name">Имя</label>
            <input name="name" value={values.name} onChange={handleChange} className="form__input" id="name" required minLength={2} maxLength={30} autoComplete="current-name" pattern="^[а-яА-ЯЁё\s\-]+$" />
            <span className="form__error">{errors.name}</span>

            <label className="form__label" htmlFor="email">E-mail</label>
            <input name="email" value={values.email} onChange={handleChange} type="email" className="form__input" id="email" required autoComplete="current-email" readOnly onFocus={handleFocus} pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
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

export default Register;
