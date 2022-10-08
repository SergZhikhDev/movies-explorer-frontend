import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

import Header from "../../nested-components/Header/Header";
import { ErrorText } from "../../nested-components/ErrorText/ErrorText";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useInputt } from "../../../hooks/useInput";
import { config } from "../../../utils/constants";

export const Profile = ({ handleUpdateUser, currentUser, onSignOut }) => {
  const { isFetchError } = useContext(CurrentUserContext);
  const [disableInput, setDisableInput] = useState(true);
  const name = useInputt("", config.name);
  const email = useInputt("", config.email);
  const isValidForm = name.readyForUpdate && email.readyForUpdate;

  const handleUpdUser = (e) => {
    e.preventDefault();
    setDisableInput(false);
  };

  function signOut() {
    onSignOut();
  }

  function onSubmit(e) {
    e.preventDefault();
    handleUpdateUser(name.value.field, email.value.field);
  }

  return (
    <main
      className=' form form_type_profile sfp hp'
      noValidate
      onSubmit={onSubmit}
    >
      <form className='form__admin form__admin_type_profile '>
        <Header />
        <div className='form__main form__main_type_profile '>
          <div className='form__main-container'>
            <h3 className=' form__title'>{`Привет, ${currentUser.name}!`}</h3>
            <fieldset className=' form__input-container form__input-container_ctrl_texts'>
              <label
                className='
                form__label'
              >
                <span className='form__text'>Имя</span>
                {disableInput ? (
                  <input
                    className='form__item form__item_el_name'
                    placeholder={currentUser.name}
                    value={name.value.field || ""}
                    disabled={disableInput}
                  />
                ) : (
                  <input
                    className='form__item form__item_el_name'
                    onChange={name.handleChange}
                    value={name.value.field || ""}
                    onClick={name.onClick}
                    onBlur={name.onBlur}
                    name='name'
                    type='text'
                    autoComplete='off'
                    placeholder={currentUser.name}
                    required
                    ref={name.callbackRef}
                  />
                )}
              </label>
              <hr className='form__line line line_form'></hr>

              <label className='form__label'>
                <span className='form__text'>Email</span>
                <input
                  className='form__item form__item_el_email'
                  onChange={email.handleChange}
                  value={email.value.field || ""}
                  onClick={email.onClick}
                  onBlur={email.onBlur}
                  name='email'
                  type='email'
                  autoComplete='off'
                  placeholder={currentUser.email}
                  required
                  disabled={disableInput}
                />
              </label>
            </fieldset>
          </div>

          <fieldset className='form__handlers '>
            <span className='form__errors'>
              {name.isDirty && (
                <ErrorText type='auth'>{name.errorMessages}</ErrorText>
              )}
              {email.isDirty && (
                <ErrorText type='auth'>{email.errorMessages}</ErrorText>
              )}

              {email.needTwoChanges && (
                <ErrorText type='auth'>{email.needTwoChanges}</ErrorText>
              )}
            </span>
            <label className='form__label form__label_el_handlers'>
              <input type='submit' className='form__item invisible' />

              {disableInput ? (
                <button
                  type='button'
                  className='form__button  form__button_el_button form__button_type_edit form__text'
                  onClick={handleUpdUser}
                >
                  Редактировать
                </button>
              ) : (
                <button
                  type='submit'
                  disabled={!isValidForm}
                  className='form__button form__button_el_button form__button_type_edit form__text'
                >
                  Сохранить
                </button>
              )}
            </label>

            {isFetchError && (
              <ErrorText type='auth-button'>Что-то пошло не так...</ErrorText>
            )}
          </fieldset>
        </div>

        <div className='form__footer form__footer_type_profile '>
          <Link
            to='/'
            className='form__button form__button_out '
            onClick={signOut}
          >
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </main>
  );
};
