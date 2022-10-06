import React from "react";
import "./Login.css";

import Logo from "../../nested-components/Logo/Logo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className=' form login sfp_type_reg hp'>
      <div className=' form__header form__header_type_auth '>
        <Logo />
      </div>

      <div
        className='
        form__container
        form__container_type_auth'
      >
        <form
          className='
          form__admin
          form__admin_type_auth '
        >
          <h3
            className='
            form__heading
            form__heading_type_auth'
          >
            Рады видеть!
          </h3>
          <fieldset
            className='
            form__input-container
            form__input-container_type_auth_type_login
           '
          >
            <label
              className='
                form__label
                form__label_type_auth'
            >
              {" "}
              <span
                className='
                  form__text
                  form__text_type_auth'
              >
                Email
              </span>
              <input
                type='email'
                name='email'
                className='
                  form__item
                  form__item_type_auth
                  form__item_el_email
                  form__item_el_email_type_auth'
                id='userEmail'
                placeholder='Email'
              />
              <hr
                className='
                 form__line
                 line
                 line_form
                 line_form_type_auth'
              ></hr>{" "}
              <span
                className='
                 form__error'
                id='error-userEmail'
              >
                Неправильный формат e-mail
              </span>{" "}
            </label>
            <label
              className='
               form__label
                form__label_type_auth'
            >
              {" "}
              <span
                className='
                 form__text
                 form__text_type_auth'
              >
                Пароль
              </span>
              <input
                type='password'
                name='password'
                className='
                  form__item
                  form__item_type_auth
                  form__item_type_auth_error
                  form__item_el_name form__item_el_name_type_auth'
                id='userPassword'
                placeholder='Password'
              />
              <hr
                className='
                form__line
                line
                line_form
                line_form_type_auth'
              ></hr>{" "}
              <span
                className='
                  form__error
                  form__error_visible '
                id='error-userPassword'
              >
                Что-то пошло не так...
              </span>{" "}
            </label>
          </fieldset>
          <fieldset
            className='
              form__handlers
              form__handlers_type_auth'
          >
            <label
              className='
              form__label
              form__label_el_button'
            >
              <input type='submit' class='form__item invisible' />{" "}
              <button
                type='submit'
                className='
                  form__button
                  form__button_el_button
                  form__text'
              >
                {" "}
                Войти{" "}
              </button>
            </label>
          </fieldset>
        </form>
      </div>
      <div className=' form__footer form__footer_type_auth'>
        <p
          className='
               form__question'
        >
          {" "}
          Ещё не зарегистрированы?
        </p>
        <Link
          className='
               form__login-link '
          to='signin'
        >
          {" "}
          Регистрация{" "}
        </Link>
      </div>
    </main>
  );
}

export default Login;
