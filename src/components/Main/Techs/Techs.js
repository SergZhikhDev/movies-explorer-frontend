import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="project-technologies" id="techs">
        <h3 className="section-title__name section-title__name_techs">Технологии</h3>
        <hr className="line"></hr>
      <h2 className="section-name">7 технологий</h2>
      <p className="section-table__description section-table__description_techs">
        На курсе веб-разработки мы освоили технологии,
         которые применили в&nbsp;дипломном проекте.</p>
      <ul className="techs-cards">
        <li className="techs-cards__item">HTML</li>
        <li className="techs-cards__item">CSS</li>
        <li className="techs-cards__item">JS</li>
        <li className="techs-cards__item">React</li>
        <li className="techs-cards__item">Git</li>
        <li className="techs-cards__item">Express.js</li>
        <li className="techs-cards__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
