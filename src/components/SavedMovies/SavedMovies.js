import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";


function SavedMovies() {
  return (
    <>
        <Header />
      <main className="saved-movies sp">

      <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
        
    </>
  
    );
  }
  
  export default SavedMovies;