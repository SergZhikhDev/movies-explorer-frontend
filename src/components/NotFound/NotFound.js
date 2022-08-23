import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
  
  <div className="page-notfound" >
      <div className="page-notfound__text">
        <p className="page-notfound__title">404</p>
        <p className="page-notfound__subtitle">Страница не найдена</p>
      </div>
      <button
        className="page-notfound__back-button"
        type="button"
      >Назад</button>
    </div>

  );
}
export default NotFound;