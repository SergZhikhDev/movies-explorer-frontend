import React from "react";
import Header from "../Header/Header";

import "./Profile.css";

function Profile() {
  return (
    <>
      <Header />
      <main className="profile form">
        <div className="form__container">
          <form className="form__admin form__admin_edit ">
            <div class="form__main-container">
              <h3 className="form__heading">Привет, Сергей!</h3>

              <fieldset className="form__input-container form__input-container_ctrl_texts">
                <label className="form__label">
                  {" "}
                  <span className="form__text">Имя</span>
                  <input
                    type="text"
                    name="name"
                    className="form__item form__item_el_name"
                    id="userName"
                    placeholder="Имя"
                    required
                  />{" "}
                </label>

                <hr className="form__line line line_form"></hr>

                <label className="form__label">
                  {" "}
                  <span className="form__text">Email</span>
                  <input
                    type="email"
                    name="email"
                    className="form__item form__item_el_email"
                    placeholder="Email"
                    required
                  />{" "}
                </label>
              </fieldset>
            </div>

            <fieldset className="form__handlers ">
              <label className="form__label form__label_type_edit">
                {" "}
                <input type="submit" class="form__item invisible" />{" "}
                <span className="form__button form__button_type_edit form__text">
                  Редактировать
                </span>{" "}
              </label>
            </fieldset>

            <div className="form__footer">
              <button type="button" className="form__button form__button_out ">
                {" "}
                Выйти из аккаунта{" "}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
