import React from "react";
import "./MoviesCard.css";
import plug from "../../../images/plug-movie-img.png";

function MoviesCard() {
  return (
    <li className='card-movie'>
      <div className='card-movie__description'>
        <p className='card-movie__title'>33 слова о дизайне</p>
        <p className='card-movie__duration'>1ч 47м</p>
        <button type='button' className='card-movie__flag'></button>
      </div>
      <img className='card-movie__image' src={plug} alt='постер фильма' />
    </li>
  );
}

export default MoviesCard;
