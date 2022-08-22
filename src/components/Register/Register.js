import React from "react";
import "./Register.css";

import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <main className="register form">
        <div className="form__container form__container_type_register">
          <form className="form__admin form__admin_type_register ">
            <Logo />
            <h3 className="form__heading form__heading_type_register">
              Добро пожаловать!
            </h3>
            <fieldset className="form__input-container form__input-container_type_register">
              <label className="form__label form__label_type_register">
                <span className="form__text form__text_type_register">Имя</span>
                <input
                  type="text"
                  name="name"
                  className="form__item form__item_type_register form__item_el_name form__item_el_name_type_register"
                  id="userName"
                  placeholder="Имя"
                />

                <hr className="form__line line line_form line_form_type_register"></hr>

                <span className="form__error" id="error-userName">
                  Что-то пошло не так...
                </span>
              </label>

              <label className="form__label form__label_type_register">
                <span className="form__text form__text_type_register">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="form__item form__item_type_register form__item_el_email form__item_el_email_type_register"
                  id="userEmail"
                  placeholder="Email"
                />

                <hr className="form__line line line_form line_form_type_register"></hr>
                <span className="form__error" id="error-userEmail">
                  Неправильный формат e-mail
                </span>
              </label>

              <label className="form__label form__label_type_register">
                <span className="form__text form__text_type_register">
                  Пароль
                </span>
                <input
                  type="password"
                  name="password"
                  className="form__item  form__item_type_register form__item_type_register_error form__item_error form__item_el_name form__item_el_name_type_register"
                  id="userPassword"
                  placeholder="Password"
                />

                <hr className="form__line line line_form line_form_type_register"></hr>
                <span className="form__error  form__error_visible " id="error-userPassword">
                  Что-то пошло не так...
                </span>
              </label>
            </fieldset>





            <fieldset
              className="form__handlers
         form__handlers_type_register"
            >
              <label className="form__label form__label_el_button">
                <input type="submit" class="form__item invisible" />{" "}
                <button type="submit" className="form__button form__button_el_button form__text">
                  Зарегистрироваться
                </button>
              </label>
            </fieldset>

            <div className="form__footer form__footer_type_register">
              <p className="form__question">Уже зарегистрированы?</p>
              <Link className="form__login-link " to="signin">
                Войти
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Register;
