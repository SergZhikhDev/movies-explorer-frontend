import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import AuthBtnBlock from "../AuthBtnBlock/AuthBtnBlock";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header sp">
      <Logo />
      
      {/* <Navigation /> */}
      <AuthBtnBlock />
    </header>
  );
}

export default Header;


<meta name="viewport" content="width=device-width, initial-scale=1"></meta>