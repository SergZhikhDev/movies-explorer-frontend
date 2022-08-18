import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
function Header() {
  return (
    <header className="header">
      <Link className="navbar-btn logo" to="/">
        <img src={logo} alt="логотип проекта Movies-Explorer" />
      </Link>
      <nav className="header__navbar btns-block_registered">
        <ul className="btns-block__list navbar-btns_is-login">
          <li className="btns-block__link films-btn" >
            <NavLink to="/movies">
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

        <NavLink className="btns-block__link accaunt-btn" to="saved-movies">
          {" "}
        </NavLink>
      </nav>

      <div className="header__navbar btns-block btns-block_not-registered">
        <ul className="btns-block__list navbar-btns_not-login">
          <li className="btns-block__link btns-block__link_signup-btn">
            <Link
             
              to="saved-movies"
            >
              Регистрация
            </Link>
          </li>
          <li className="btns-block__link btns-block btns-block__link_login-btn">
            <Link >
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
