import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project-description" id="project">
        <h3 className="section-title__name">О проекте</h3>
        <hr className="line"></hr>
      <article className="section-table">
        <div className="section-table__stages">
          <h4 className="section-table__subtitle">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="section-table__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="section-table__time">
          <h4 className="section-table__subtitle">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="section-table__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>

      <article className="section-graph">
        <div className="section-graph__back-end">
          <p className="section-graph__time section-graph__time_back">1 неделя</p>
          <p className="section-graph__description">Back-end</p>
        </div>
        <div className="section-graph__front-end">
          <p className="section-graph__time section-graph__time_front">4 недели</p>
          <p className="section-graph__description">Front-end</p>
        </div>

      </article>
    </section>
  );
}

export default AboutProject;
