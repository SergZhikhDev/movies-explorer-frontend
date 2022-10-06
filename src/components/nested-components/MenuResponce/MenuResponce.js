import React from "react";
import "./MenuResponce.css";
import BtnsList from "../MenuBtnsList/MenuBtnsList";

function MenuResponce() {
  return (
    <div className=' res-menu '>
      <input id='res-menu__toggle' type='checkbox' />
      <label className='res-menu__btn' for='res-menu__toggle'>
        <span></span>
      </label>
      <BtnsList />
    </div>
  );
}

export default MenuResponce;
