import React from "react";
import { Link } from "react-router-dom";
import "./AuthBtnBlock.css";

function AuthBtnBlock() {
  return (
   

      <div className="header__navbar btns-block btns-block_type_not-registered">
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
              to="signin"
            >
              Войти
            </Link>
          </li>
        </ul>
      </div>

  );
}

export default AuthBtnBlock;
