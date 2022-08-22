import React from "react";
import "./logo.css";

import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <Link className="navbar-btn logo" to="/">
      <img src={logo} alt="логотип проекта Movies-Explorer" />
    </Link>
  );
}

export default Logo;
