import React from "react";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className="project-poster sp" id="poster">

      <div className="project-poster__back-image">
      <h1 className="project-poster__title">
        Учебный проект студента факультета Веб-разработки.
      </h1></div>

      <NavTab />
    </section>
  );
}

export default Promo;
