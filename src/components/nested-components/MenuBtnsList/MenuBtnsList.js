import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBtnsList.css";

function MenuBtnsList() {
  return (
    <nav
      className='
      btns-block__list_res-menu
      btns-block__list
      btns-block__list_type_navigation
      
        '
    >
      <NavLink
        exact
        to='/'
        activeClassName='btns-block__link_active'
        className=' btns-block__link '
      >
        Главная
      </NavLink>
      <NavLink
        to='movies'
        activeClassName='btns-block__link_active'
        className=' btns-block__link '
      >
        Фильмы
      </NavLink>
      <NavLink
        to='saved-movies'
        activeClassName='btns-block__link_active'
        className=' btns-block__link '
      >
        Соохранённые фильмы
      </NavLink>
      <NavLink
        to='profile'
        activeClassName='btns-block__link_active'
        className=' btns-block__link accaunt-btn '
      ></NavLink>
    </nav>
  );
}

export default MenuBtnsList;
