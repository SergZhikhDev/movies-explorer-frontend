import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import plug from "../../images/plug-movie-img.png";

function Movies() {
  return (
    <section className="movies landing ">
      <Header />
      <section className="search"></section>
      <ul className="cards">
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag card__flag_grey"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li> 
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li> <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
        <li className="card">
          <div className="card__description">
            <p className="card__title">33 слова о дизайне</p>
            <p className="card__duration">1ч 47м</p>
            <button type="button" className="card__flag"></button>
          </div>
          <img className="card__image" src={plug} alt="постер фильма" />
        </li>
      </ul>
      <button type="button" className="more">Ещё</button>
      <Footer />
    </section>
  );
}

export default Movies;
