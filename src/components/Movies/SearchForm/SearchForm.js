import React from "react";
import "./SearchForm.css";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" noValidate>
        <div className="search__search-movie-container">
          <fieldset className="search__input-container search__input-container_film">
            <input
              type="text"
              className="search__movie"
              name="movie"
              placeholder = "Фильм"
              required
              id="search-movie"
            />
          </fieldset>
          <fieldset class="search__input-container search__input-container_btn submit-button">
            <label className="search__label submit-button">
              <input type="submit" class="submit-button__invisible invisible" />
              <input className="search__button " />
            </label>
          </fieldset>
        </div>
        <hr className="search__line line line_search"></hr>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
