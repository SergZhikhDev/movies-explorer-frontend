import React from "react";
import "./AboutMe.css";
import avatar from "../../../images/owner.jpg";

function AboutMe() {
  return (
    <section className="project-owner" id="student">
      <h3 className="section-title__name section-title__name_techs">Студент</h3>
      <hr className="line"></hr>

      <article className="owner__resume">
        <div className="owner__about-self">
          <h2 className="owner__name">Сергей</h2>
          <p className="owner__description">Фронтенд-разработчик, 47 лет</p>
          <blockquote className="owner__quote">
            Я родился и живу в тольятти. Учусь на курсе «Web-Разработчик» на
            платформе 'Яндекс.Практикум'. У меня есть жена и 2 дочери. Свободное
            время посвящаю семье и заботе о собственном здоровье, ролики,
            велосипед.
          </blockquote>
          <ul className="social-nets">
            <li className="social-nets__item">Github</li>
            <li className="social-nets__item">Linkedin</li>
          </ul>
        </div>
        <img
          className="main-foto"
          src={avatar}
          alt="Фотография исполнителя проекта"
        />
      </article>
    </section>
  );
}

export default AboutMe;
