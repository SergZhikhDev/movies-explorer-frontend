import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className='page-notfound hp'>
      <div className='page-notfound__text'>
        <p className='page-notfound__title'>404</p>
        <p className='page-notfound__subtitle'>Страница не найдена</p>
      </div>

      <Link to='/'>
        {" "}
        <button className='page-notfound__back-button' type='button'>
          Назад
        </button>{" "}
      </Link>
    </div>
  );
}
export default NotFound;
