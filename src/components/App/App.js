import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages-components/Main/Main";
import Movies from "../pages-components/Movies/Movies";
import SavedMovies from "../pages-components/SavedMovies/SavedMovies";
import Profile from "../pages-components/Profile/Profile";
import Login from "../pages-components/Login/Login";
import Register from "../pages-components/Register/Register";
import NotFound from "../pages-components/NotFound/NotFound";

import "./App.css";
function App() {
  return (
    <div className='App page'>
      <Switch>
        <Route exact path='/' component={Main} />

        <Route exact path='/movies' component={Movies} />

        <Route exact path='/saved-movies' component={SavedMovies} />

        <Route exact path='/profile' component={Profile} />

        <Route exact path='/signin' component={Login} />

        <Route exact path='/signup' component={Register} />

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
// Если разместить несколько компонентов Route внутри Switch, отрисуется только один из них.
