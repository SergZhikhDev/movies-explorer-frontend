import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <Header />
      <main className="movies landing ">
        <SearchForm />
        <MoviesCardList />

        <button type="button" className="more">
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
