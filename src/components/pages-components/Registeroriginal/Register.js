
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../../nested-components/Logo/Logo";
import ErrorText from "../../nested-components/ErrorText/ErrorText";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useInput } from "../../../hooks/useInput";
import useForm from "../../../hooks/useForm";
import {
  configName,
  configEmail,
  configPassword,
} from "../../../utils/constants";

  export const Register= (props) => {

  const { isFetchError } = useContext(CurrentUserContext);
  const name = useInput("", configName); // параметр в юсстэйт дефолтное значение поля
  const email = useInput("", configEmail);
  const password = useInput("", configPassword);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.handleRegister(name.state.value, password.state.value, email.state.value);
  // }
  const { handleChange, values, errors, handleSubmit } = useForm();

  console.log(errors)
  return (
    <main
      className='form register sfp_type_reg hp'
      onSubmit={handleSubmit}
      noValidate
    >
      <div className='form__header form__header_type_auth '>
        <Logo />
      </div>
      {/***************************************************************************************************************************/}
      <div className='form__container form__container_type_auth'>
        <form className='form__admin  form__admin_type_auth '>
          <h3 className='form__heading form__heading_type_auth'>
            Добро пожаловать!
          </h3>
          <fieldset className='form__input-container form__input-container_type_auth'>
            {/* **Name****Name****Name****Name****Name****Name****Name****Name****Name****Name****Name** */}
            <label className='form__label form__label_type_auth'>
              <span className='form__text form__text_type_auth'>Имя</span>
              <input
                className='form__item form__item_type_auth form__item_el_name form__item_el_name_type_auth'
                // onChange={(e)=>name.onChange(e)}
                onChange={handleChange}
                value={values.username  }
                onBlur={name.onBlur}
                name='name'
                type='text'
                autoComplete='off'

                placeholder='Имя'
              />
              <hr className='form__line line line_form line_form_type_auth'></hr>
              <span className='form__error' id='error-userName'>
                  {/* { ( name.state.isVisited && errors.username &&
                  <ErrorText type='auth'>Поле {name.state.errorMessage}</ErrorText>  )} */}
                   { (  errors.username &&<ErrorText type='auth'> ошибка {errors.username}</ErrorText>  )}

              
               
              </span>
            </label>
            {/* *Email*****Email*****Email*****Email*****Email*****Email*****Email*****Email***/}
            <label className='form__label form__label_type_auth'>
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
              <hr className='form__line  line  line_form  line_form_type_auth'></hr>
              <span className='form__error' id='error-userEmail'>
                {!email.inputValid && (
                  <ErrorText type='auth'>{email.messageError}</ErrorText>
                )}

                {email.isVisited && email.isEmpty && (
                  <ErrorText type='auth'>Поле не может быть пустым</ErrorText>
                )}
                {email.isVisited && email.emailError && (
                  <ErrorText type='auth'>некорректная формат EMAIL </ErrorText>
                )}
            
              </span>
            </label>

            {/* ***Password******Password******Password******Password******Password******Password******Password*** */}
            <label className='form__label form__label_type_auth'>
              <span className='form__text  form__text_type_auth'>Пароль</span>
              <input
                className='form__item form__item_type_auth form__item_type_auth_error form__item_el_name form__item_el_name_type_auth'
                type='password'
                name='password'
                onChange={(e) => password.onChange(e)}
                value={password.value}
                onBlur={(e) => password.onBlur(e)}
                placeholder='Password'
              />
              <hr className='form__line line line_form line_form_type_auth'></hr>
              <span className='form__error ' id='error-userPassword'>
                {!password.inputValid && (
                  <ErrorText type='auth'>{password.messageError}</ErrorText>
                )}

                {password.isVisited && password.isEmpty && (
                  <ErrorText type='auth'>Поле не может быть пустым</ErrorText>
                )}
                {password.isVisited && password.minLengthError && (
                  <ErrorText type='auth'>некорректная min длина </ErrorText>
                )}
                {password.isVisited && password.maxLengthError && (
                  <ErrorText type='auth'>некорректная max длина </ErrorText>
                )}
              </span>
            </label> 
          </fieldset>
          {/* **********************************************************************************************/}
     <fieldset className='form__handlers  form__handlers_type_auth'>
            <label className='form__label  form__label_el_button'>
              <input type='submit' className='form__item invisible' />
              <button
                type='submit'
                className='form__button form__button_el_button form__text'
                disabled={
                  !name.inputValid || !email.inputValid || !password.inputValid
                }
              >
                Зарегистрироваться
              </button>
            </label>
            {isFetchError && (
              <ErrorText type='auth-button'>Что-то пошло не так...</ErrorText>
            )}
          </fieldset> 
        </form>
      </div>
      <div className='form__footer form__footer_type_auth'>
        <p className='form__question'>Уже зарегистрированы?</p>
        <Link className='form__login-link ' to='signin'>
          Войти
        </Link>
      </div>
    </main>
  );
}

// export default Register;
