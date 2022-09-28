import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../nested-components/Header/Header";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

import "./Profile.css";

import { useFormWithValidation } from "../../../hooks/useFormWithValidation";
import { validation_params } from "../../../utils/constants";
function Profile({ handleUpdateUser, currentUser, onSignOut, setIsShowMenu }) {
  const startValues = {
    name: currentUser.name,
    email: currentUser.email,
  };
  const [disableInput, setDisableInput] = useState(true);

  const { values, isValid, handleChange, setIsValid } =
    useFormWithValidation(startValues);

  // Проверить что данные изменились и валидны
  useEffect(() => {
    const isValidName = validation_params.regex.name.test(values.name);
    const isValidEmail = validation_params.regex.email.test(values.email);
    const isChangeName = values.name !== currentUser.name;
    const isChangeEmail = values.email !== currentUser.email;

    isValidName && isValidEmail && (isChangeName || isChangeEmail)
      ? setIsValid(true)
      : setIsValid(false);
  }, [values]);

  function clickUpdateButton(e) {
    e.preventDefault();

    handleUpdateUser(values).then(() => setIsValid(false));
  }

  const handleChangeData = (e) => {
    e.preventDefault();
    setDisableInput(false);
  };
  function signOut() {
    console.log("signOut");

    onSignOut();
  }
  // function handleEditSubmit(e) {
  //   e.preventDefault();
  //   onUpdateUser({
  //     name: currentUser.name,
  //     email: currentUser.email
  //   });
  // }

  // console.log("currentUser", currentUser);
  // console.log("disableInput", disableInput);
  // console.log("isValid", isValid);

  return (
    <main
      className=' form form_type_profile sfp hp'
      id='#accaunt'
      // onSubmit={handleEditSubmit}
      // disabled={!isValid}
    >
      <div className=' form__header_type_profile'>
        <Header />
      </div>
      <div className='form__main form__main_type_profile '>
        <form className='form__admin form__admin_type_profile '>
          <div className='form__main-container' onSubmit={clickUpdateButton}>
            <h3 className=' form__title'>{`Привет, ${currentUser.name}!`}</h3>
            <fieldset className=' form__input-container form__input-container_ctrl_texts'>
              <label
                className='
                form__label'
              >
                <span className='form__text'>Имя</span>
                <input
                  type='text'
                  value={values.name || ""}
                  name='name'
                  disabled={disableInput}
                  onChange={handleChange}
                  className='form__item form__item_el_name'
                  id='userName'
                  placeholder='Имя'
                  required
                />
              </label>
              <hr className='form__line line line_form'></hr>

              <label className='form__label'>
                <span className='form__text'>Email</span>
                <input
                  type='email'
                  value={values.email || ""}
                  name='email'
                  disabled={disableInput}
                  onInput={handleChange}
                  className='form__item form__item_el_email'
                  placeholder='Email'
                  required
                />
              </label>
            </fieldset>
          </div>

          <fieldset className='form__handlers '>
            <label className='form__label form__label_el_handlers'>
              <input type='submit' className='form__item invisible' />

              {disableInput ? (
                <button
                  type='button'
                  className='form__button  form__button_el_button form__button_type_edit form__text'
                  // onClick={clickUpdateButton}
                  // disabled={!isValid}
                  onClick={handleChangeData}
                >
                  {" "}
                  Редактировать{" "}
                </button>
              ) : (
                <button
                  type='submit'
                  className='form__button 
                form__button_el_button
                form__button_type_edit
                 form__text'
                  disabled={!isValid}
                  // onSubmit={handleEditSubmit}
                  onSubmit={clickUpdateButton}
                >
                  Сохранить
                </button>
              )}
            </label>
          </fieldset>
        </form>
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
    </main>
    //   const currentUser = useContext(CurrentUserContext);
    //     console.log(currentUser.name)
    // const startValues = {
    //     name: currentUser.name,
    //     email: currentUser.email,

    //   };
    // const { values, isValid, handleChange, setIsValid } =
    //     useFormWithValidation(startValues);
    // const [disableInput, setDisableInput] = useState(true);

    //   // Проверить что данные изменились и валидны
    //   useEffect(() => {
    //     const isValidName = validation_params.regex.name.test(values.name);
    //     const isValidEmail = validation_params.regex.email.test(values.email);
    //     const isChangeName = values.name !== currentUser.name;
    //     const isChangeEmail = values.email !== currentUser.email;

    //     isValidName && isValidEmail && (isChangeName || isChangeEmail)
    //       ? setIsValid(true)
    //       : setIsValid(false);
    //   }, [values]);

    //   function clickUpdateButton() {
    //     handleUpdateUser(values).then(() => setIsValid(false));
    //   }

    //   function clickSignOutButton() {
    //     onSignOut();
    //   }
    ////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////////////
  );
}

export default Profile;
