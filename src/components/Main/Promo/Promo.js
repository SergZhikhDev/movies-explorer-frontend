import React from "react";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";
import logo from "../../../images/logo-practicum.svg";

function Promo() {
  return (
    <section className="project-poster" id="poster">
      {/* <img
        className="back-image"
        src={logo}
        alt="логотип факультета веб-разработки яндекс практикума"
      /> */}
      <div className="project-poster__back-image">
      <h1 className="project-poster__title">
        Учебный проект студента факультета Веб-разработки.
      </h1></div>

      <NavTab />
    </section>
  );
}

export default Promo;
