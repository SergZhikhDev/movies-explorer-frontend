import React from "react";
import { useContext } from "react";

import "./Login.css";

import Logo from "../../src/components/nested-components/Logo/Logo";
import { Link } from "react-router-dom";
import ErrorText from "../../src/components/nested-components/ErrorText/ErrorText";

import { useFormWithValidation } from "../../src/hooks/useFormWithValidation";
import { validation_config } from "../../src/utils/constants";
import { CurrentUserContext } from "../../src/contexts/CurrentUserContext";

function Login(props) {
  const { isFetchError } = useContext(CurrentUserContext);

  const { values, errors, handleChange } = useFormWithValidation(
    { email: "", password: "" },
    validation_config.login
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(values);
  };

  return (
    <main className='form login sfp_type_reg hp' onSubmit={handleSubmit}>
      <div className='form__header form__header_type_auth '>
        <Logo />
      </div>

      <div className='form__container form__container_type_auth'>
        <form className='form__admin form__admin_type_auth '>
          <h3 className='form__heading form__heading_type_auth'>
            Рады видеть!
          </h3>
          <fieldset className='form__input-container form__input-container_type_auth_type_login '>
            <label className='form__label  form__label_type_auth'>
              {" "}
              <span className='form__text form__text_type_auth'>Email</span>
              <input
                className='form__item form__item_type_auth form__item_el_email form__item_el_email_type_auth'
                // id='userEmail'
                type='email'
                name='email'
                placeholder='Email'
                value={values.email}
                onInput={handleChange}
                isValid={!errors.email}
              />
              <hr className='form__line line line_form line_form_type_auth'></hr>
              <span className='form__error' id='error-userEmail'>
                {errors.email && (
                  <ErrorText type='auth'>{errors.email}</ErrorText>
                )}
              </span>
            </label>
            <label className='form__label  form__label_type_auth'>
              <span className='form__text form__text_type_auth'></span>
              <input
                className='form__item form__item_type_auth form__item_el_name form__item_el_name_type_auth'
                // id='userPassword'
                type='password'
                name='password'
                placeholder='Password'
                value={values.password}
                isValid={!errors.password}
                onInput={handleChange}
              />
              <hr className='form__line  line  line_form  line_form_type_auth'></hr>
              <span className='form__error ' id='error-userPassword'>
                {errors.password && (
                  <ErrorText type='auth'>{errors.password}</ErrorText>
                )}
              </span>
            </label>
          </fieldset>
          <fieldset className='form__handlers form__handlers_type_auth'>
            <label className='form__label form__label_el_button'>
              <input type='submit' className='form__item invisible' />
              <button
                type='submit'
                className='form__button form__button_el_button form__text'
              >
                Войти
              </button>
            </label>
            {isFetchError && (
              <ErrorText type='form__error '>Что-то пошло не так...</ErrorText>
            )}
          </fieldset>
        </form>
      </div>
      <div className='form__footer form__footer_type_auth'>
        <p className='form__question'>Ещё не зарегистрированы?</p>
        <Link className='form__login-link ' to='signup'>
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default Login;
