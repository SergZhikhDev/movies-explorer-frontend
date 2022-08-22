import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="btns-block__list navtab__btns">
        <li className="btns-block__link navtab-btn">
          <a  href="#about-project">
           О проекте
          </a> 
        </li>
        <li className="btns-block__link navtab-btn">
          <a  href="#techs">
            Технологии
          </a>
        </li>
        <li className="btns-block__link navtab-btn">
          <a  href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
