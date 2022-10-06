import React from "react";
import Header from "../../nested-components/Header/Header";

import "./Profile.css";

function Profile() {
  return (
    <main className=' form form_type_profile sfp hp' id='#accaunt'>
      <div className=' form__header_type_profile'>
        <Header />
      </div>
      <div className='form__main form__main_type_profile '>
        <form className='form__admin form__admin_type_profile '>
          {/* <div class='form__main-container'> */}
          <h3 className=' form__title'> Привет, Сергей! </h3>
          <fieldset className=' form__input-container form__input-container_ctrl_texts'>
            <label
              className='
                form__label'
            >
              {" "}
              <span className='form__text'>Имя</span>
              <input
                type='text'
                name='name'
                className='form__item form__item_el_name'
                id='userName'
                placeholder='Имя'
                required
              />{" "}
            </label>
            <hr className='form__line line line_form'></hr>

            <label className='form__label'>
              {" "}
              <span className='form__text'>Email</span>
              <input
                type='email'
                name='email'
                className='form__item form__item_el_email'
                placeholder='Email'
                required
              />{" "}
            </label>
          </fieldset>
          {/* </div> */}

          <fieldset className='form__handlers '>
            <label className='form__label form__label_el_handlers'>
              {" "}
              <input type='submit' class='form__item invisible' />{" "}
              <span className='form__button form__button_type_edit form__text'>
                Редактировать
              </span>{" "}
            </label>
          </fieldset>
        </form>
      </div>
      <div className='form__footer form__footer_type_profile '>
        <button type='button' className='form__button form__button_out '>
          {" "}
          Выйти из аккаунта{" "}
        </button>
      </div>
    </main>
  );
}

export default Profile;
