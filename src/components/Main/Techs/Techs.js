import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="project-technologies techs" id="techs">
        <h2 className="techs__title section-title section-title_techs">Технологии</h2>
        <hr className="line"></hr>
      <p className="techs__name">7 технологий</p>
      <p className="techs__description section-table__description section-table__description_techs">
        На курсе веб-разработки мы освоили технологии,
         которые применили в&nbsp;дипломном проекте.</p>
      <ul className="techs__cards">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
