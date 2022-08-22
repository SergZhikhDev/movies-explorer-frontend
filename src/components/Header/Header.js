import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header">
      <Logo />

      <Navigation />
      <div className="header__navbar btns-block btns-block_not-registered">
        <ul className="btns-block__list navbar-btns_not-login">
          <li>
            <Link
              className="btns-block__link btns-block__link_signup-btn"
              to="signup"
            >
              Регистрация
            </Link>
          </li>
          <li>
            <Link
              className="btns-block__link btns-block btns-block__link_login-btn"
              to="login"
            >
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
