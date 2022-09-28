import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../nested-components/Logo/Logo";
import ErrorText from "../../nested-components/ErrorText/ErrorText";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

// import { useFormWithValidation } from "../../../hooks/useFormWithValidation";
// import { validation_config } from "../../../utils/constants";
import { useInput } from "../../../hooks/useInput";
import {
  configEmail,
  configPassword,
} from "../../../utils/constants";

function Login(props) {
  const { isFetchError } = useContext(CurrentUserContext);

  // const { values, errors, handleChange } = useFormWithValidation(
  //   { email: "", password: "" },
  //   validation_config.login
  // );
  const email = useInput("", configEmail);
  const password = useInput("", configPassword);


  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(email.value, password.value);
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
                 <span className='form__text form__text_type_auth'>Email</span>
              <input
                className='form__item form__item_type_auth form__item_el_email form__item_el_email_type_auth'
                type='email'
                name='email'
                onChange={(e) => email.onChange(e)}
                value={email.value}
                onBlur={(e) => email.onBlur(e)}
                placeholder='Email'
              />
              <hr className='form__line line line_form line_form_type_auth'></hr>
              <span className='form__error' id='error-userEmail'>
                {/* {errors.email && (
                  <ErrorText type='auth'>{errors.email}</ErrorText>
                )} */}
                   {!email.inputValid && (
                  <ErrorText type='auth'>{email.messageError}</ErrorText>
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
                onChange={(e) => password.onChange(e)}
                value={password.value}
                onBlur={(e) => password.onBlur(e)}
                placeholder='Password'
              />
              <hr className='form__line  line  line_form  line_form_type_auth'></hr>
              <span className='form__error ' id='error-userPassword'>
                {/* {errors.password && (
                  <ErrorText type='auth'>{errors.password}</ErrorText>
                )} */}
                   {!password.inputValid && (
                  <ErrorText type='auth'>{password.messageError}</ErrorText>
                )}
              </span>
            </label>
          </fieldset>
          {/* ************************************************************************************* */}
          <fieldset className='form__handlers form__handlers_type_auth'>
            <label className='form__label form__label_el_button'>
              <input type='submit' className='form__item invisible' />
              <button
                type='submit'
                className='form__button form__button_el_button form__text'
                disabled={
                  !email.inputValid || !password.inputValid
                }
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
