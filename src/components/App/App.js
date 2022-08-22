import React from "react";
import { Route, Switch } from "react-router-dom";
// import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
// import Footer from "../Footer/Footer";

import "./App.css";
function App() {
  return (
    <div className="App page">
      {/* <Header /> */}

      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/movies" component={Movies} />

        <Route exact path="/saved-movies" component={SavedMovies} />

        <Route exact path="/profile" component={Profile} />

        <Route exact path="/signin" component={Login} />

        <Route exact path="/signup" component={Register} />
        {/* <Route path='*'>
            <NotFound />
          </Route> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
// Если разместить несколько компонентов Route внутри Switch, отрисуется только один из них.
