import React from "react";
import "./SavedMovies.css";
import Header from "../../nested-components/Header/Header";
import Footer from "../../nested-components/Footer/Footer";
import SearchForm from "../../nested-components/SearchForm/SearchForm";
import MoviesCardList from "../../nested-components/MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <>
      <Header />
      <main className='saved-movies sp hp'>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
