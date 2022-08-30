import React from "react";
import "./AboutMe.css";
import avatar from "../../../images/owner.jpg";

function AboutMe() {
  return (
    <section className='project-owner sp' id='student'>
      <h2 className='project-owner__title section-title section-title_owner'>
        Студент
      </h2>
      <hr className='line'></hr>

      <article className='owner__resume'>
        <div className='owner__about-self'>
          <p className='owner__name'>Сергей</p>
          <p className='owner__description'>Фронтенд-разработчик, 47 лет</p>
          <blockquote className='owner__quote'>
            Я родился и живу в Тольятти. Учусь на курсе «Web-Разработчик» на
            платформе 'Яндекс.Практикум'. Мне нравится верстать сайты и
            "оживлять"их. У меня есть жена и 2 дочери. Свободное время посвящаю
            семье и заботе о здоровье. Люблю ролики, велосипед.
          </blockquote>
          <ul className='social-nets'>
            <li className='social-nets__item'>
              <a
                href='https://github.com/SergZhikhDev'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
            <li className='social-nets__item'>
              <a
                href='https://github.com/SergZhikhDev'
                target='_blank'
                rel='noreferrer'
              >
                {" "}
                Linkedin{" "}
              </a>
            </li>
          </ul>
        </div>

        <img
          className='main-foto'
          src={avatar}
          alt='Фотография исполнителя проекта'
        />
      </article>
    </section>
  );
}

export default AboutMe;
