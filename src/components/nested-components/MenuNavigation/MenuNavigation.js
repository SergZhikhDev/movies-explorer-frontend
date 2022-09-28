import React from "react";
import "./MenuNavigation.css";
import { NavLink } from "react-router-dom";
import MenuNavBtnsList from  "../MenuNavBtnsList/MenuNavBtnsList"


function MenuNavigation() {
  return (
    <div className=' navigation navbar'>
     <MenuNavBtnsList />
    </div>
  );
}

export default MenuNavigation;
