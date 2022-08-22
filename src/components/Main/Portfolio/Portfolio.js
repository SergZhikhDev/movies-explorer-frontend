import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="project-portfolio">
      <h3 className="section-subtitle">Портфолио</h3>

      {/* Лучше бы вставить нижний закоментированный блок, сохранилась бы общая стилизация */}
      {/* <h3 className="section-title__name section-title__name_techs">
        Портфолио
      </h3>
      <hr className="line"></hr> */}

      <ul className="portfolio">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/SergZhikhDev" target="_blank" rel="noreferrer" >Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/SergZhikhDev" target="_blank" rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/SergZhikhDev" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
