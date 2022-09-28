import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./MoviesCard.css";

import { formatDuration } from "../../../utils/formatDuration";
import { base_url } from "../../../utils/constants";

function MoviesCard({ film, handleClickLikeButton }) {
  const [filmId, setFilmId] = useState("");
  const isSavedMovies = useHistory().location.pathname === "/saved-movies";
  const imageUrl =
    film.thumbnail || `${base_url}/${film.image.formats.thumbnail.url}`;

  useEffect(() => {
    const filmId = film._id;
    if (filmId) setFilmId(filmId);
  }, []);

  function clickLikeButton() {
    if (isSavedMovies) {
      handleClickLikeButton(filmId);
    } else {
      const filmData = {
        country: film.country || "-",
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: base_url + film.image.url,
        trailerLink: film.trailerLink,
        nameRU: film.nameRU,
        nameEN: film.nameEN || "-",
        thumbnail: base_url + film.image.formats.thumbnail.url,
        movieId: film.id,
      };

      handleClickLikeButton(filmId, filmData).then((film) => {
        setFilmId(filmId ? "" : film._id);
      });
    }
  }
  return (
    <li className='card-movie'>
      <div className='card-movie__description'>
        <p className='card-movie__title'>{film.nameRU}</p>
        <p className='card-movie__duration'>{formatDuration(film.duration)}</p>
        <button
          type='button'
          className={
            filmId
              ? "card-movie__flag card-movie__flag_active  card-movie__close-cross"
              : "card-movie__flag"
          }
          onClick={clickLikeButton}
        ></button>
      </div>
      <a href={film.trailerLink} target='_blank' rel='noreferrer'>
        <img className='card-movie__image' src={imageUrl} alt={film.nameRU} />
      </a>
    </li>
  );
}

export default MoviesCard;
