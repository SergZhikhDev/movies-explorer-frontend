import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import AuthBtnBlock from "../AuthBtnBlock/AuthBtnBlock";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header">
      <Logo />
      
      <Navigation />
      <AuthBtnBlock />
    </header>
  );
}

export default Header;
