import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className='filter-checkbox'>
      <fieldset className='filter-checkbox__input-container filter-checkbox__input-container_checkbox'>
        <label className='filter-checkbox__label checkbox'>
          <input className='checkbox__invisible invisible' type='checkbox' />
          <span className='checkbox-switch'> </span>
          <span className='checkbox__label-text'>Короткометражки</span>
        </label>
      </fieldset>
    </section>
  );
}

export default FilterCheckbox;
