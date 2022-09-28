import React from "react";

import "./Register.css";

import Logo from "../../src/components/nested-components/Logo/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorText from "../../src/components/nested-components/ErrorText/ErrorText";
import { useEffect } from "react";

function Register(props) {
  const [name, setName] = useState(""); // параметр в юсстэйт дефолтное значение поля
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameVisited, setNameVisited] = useState(false);
  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [nameError, setNameError] = useState(
    'Поле "name" не может быть пустым'
  );
  const [emailError, setEmailError] = useState(
    'Поле "email" не может быть пустым'
  );
  const [passwordError, setPasswordError] = useState(
    'Поле "password" не может быть пустым'
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
    } else { 
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 32) {
      setNameError('Не корректный ввод поля "name"');
    } else {
      setNameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Не корректный ввод поля "email"');
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Не корректный ввод поля "password"');
    } else {
      setPasswordError("Поле 'password' не может быть пустым");
    }
  };

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "name":
        setNameVisited(true);
        break;
      case "email":
        setEmailVisited(true);
        break;
      case "password":
        setPasswordVisited(true);
        break;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister({ name, email, password });
  }

  return (
    <form className=' form register sfp_type_reg hp' onSubmit={handleSubmit}>
      <div className=' form__header form__header_type_auth '>
        <Logo />
      </div>

      <div
        className=' 
      form__container
       form__container_type_auth'
      >
        <main
          className='
          form__admin
          form__admin_type_auth '
        >
          <h3
            className='
            form__heading
            form__heading_type_auth'
          >
            Добро пожаловать!
          </h3>
          <fieldset
            className='
            form__input-container
            form__input-container_type_auth'
          >
            <label
              className='
              form__label
              form__label_type_auth'
            >
              <span
                className='
                form__text
                form__text_type_auth'
              >
                Имя
              </span>
              <input
                className='
                  form__item
                  form__item_type_auth
                  form__item_el_name
                  form__item_el_name_type_auth'
                id='userName'
                onChange={nameHandler}
                value={name}
                onBlur={(e) => blurHandler(e)}
                name='name'
                type='text'
                placeholder='Имя'
              />
              <hr
                className='
                  form__line
                  line
                  line_form
                  line_form_type_auth'
              ></hr>
              <span
                className='
                form__error'
                id='error-userName'
              >
                {nameVisited && nameError && (
                  <ErrorText type='auth'>{nameError}</ErrorText>
                )}
              </span>
            </label>
            <label
              className='
                form__label
                form__label_type_auth'
            >
              <span
                className='
                  form__text
                  form__text_type_auth'
              >
                Email
              </span>
              <input
                className='
                  form__item
                  form__item_type_auth
                  form__item_el_email
                  form__item_el_email_type_auth'
                id='userEmail'
                onChange={emailHandler}
                value={email}
                onBlur={(e) => blurHandler(e)}
                name='email'
                type='email'
                placeholder='Email'
              />
              <hr
                className='
                 form__line
                 line
                 line_form
                 line_form_type_auth'
              ></hr>
              <span
                className='
                 form__error'
                id='error-userEmail'
              >
                {emailVisited && emailError && (
                  <ErrorText type='auth'>{emailError}</ErrorText>
                )}
              </span>
            </label>
            <label
              className='
               form__label
                form__label_type_auth'
            >
              <span
                className='
                 form__text
                 form__text_type_auth'
              >
                Пароль
              </span>
              <input
                className='
                  form__item
                  form__item_type_auth
                  form__item_type_auth_error
                  form__item_el_name form__item_el_name_type_auth'
                id='userPassword'
                onChange={passwordHandler}
                value={password}
                onBlur={(e) => blurHandler(e)}
                name='password'
                type='password'
                placeholder='Password'
              />
              <hr
                className='
                form__line
                line
                line_form
                line_form_type_auth'
              ></hr>
              <span className='form__error ' id='error-userPassword'>
                {passwordVisited && passwordError && (
                  <ErrorText type='auth'>{passwordError}</ErrorText>
                )}
              </span>
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
              <input type='submit' className='form__item invisible' />
              <button
                type='submit'
                className='
                  form__button
                  form__button_el_button
                  form__text'
                disabled={!formValid}
              >
                Зарегистрироваться
              </button>
            </label>
            {/* {isFetchError && (
              <ErrorText type='auth-button'>Что-то пошло не так...</ErrorText>
            )} */}
          </fieldset>
        </main>
      </div>
      <div className=' form__footer form__footer_type_auth'>
        <p
          className='
               form__question'
        >
          Уже зарегистрированы?
        </p>
        <Link
          className='
               form__login-link '
          to='signin'
        >
          Войти
        </Link>
      </div>
    </form>
  );
}

export default Register;
