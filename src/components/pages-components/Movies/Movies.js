import React from "react";
import "./Movies.css";
import Header from "../../nested-components/Header/Header";
import Footer from "../../nested-components/Footer/Footer";
import SearchForm from "../../nested-components/SearchForm/SearchForm";
import MoviesCardList from "../../nested-components/MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <Header />
      <main className='movies sp hp'>
        <SearchForm />
        <MoviesCardList />

        <button type='button' className='more'>
          <input id='more__toggle' type='checkbox' />
          <span></span>
          Ещё{" "}
        </button>


      </main>
      <Footer />
    </>
  );
}

export default Movies;
