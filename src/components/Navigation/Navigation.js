import React from "react";
import {  NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (

   <nav className="header__navbar btns-block_registered">
        <ul className="btns-block__list navbar-btns_is-login">
          <li className="btns-block__link films-btn" >
            <NavLink to="movies">
              Фильмы
            </NavLink>
          </li >
          <li className="btns-block__link saved-films-btn">
            <NavLink
             
              to="saved-movies"
            >
              Соохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <NavLink className="btns-block__link accaunt-btn" to="profile">
          {" "}
        </NavLink>
      </nav>
 
 
  );
}

export default Navigation;