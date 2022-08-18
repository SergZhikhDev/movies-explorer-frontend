import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="project-portfolio">
      <h4 className="section-subtitle">Портфолио</h4>

      {/* Лучше бы вставить нижний закоментированный блок, сохранилась бы общая стилизация */}
      {/* <h3 className="section-title__name section-title__name_techs">
        Портфолио
      </h3>
      <hr className="line"></hr> */}

      <ul className="portfolio">
        <li className="portfolio__item">
          <p className="portfolio__text">Статичный сайт</p>
          <button type="button" className="portfolio__btn"></button>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">Адаптивный сайт</p>
          <button type="button" className="portfolio__btn"></button>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__text">Одностраничное приложение</p>
          <button type="button" className="portfolio__btn"></button>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
