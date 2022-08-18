import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="btns-block__list navtab__btns">
        <li>
          <a className="btns-block__link navtab-btn" href="#project">
            О проекте
          </a>
        </li>
        <li>
          <a className="btns-block__link navtab-btn" href="#techs">
            Технологии
          </a>
        </li>
        <li>
          <a className="btns-block__link navtab-btn" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
