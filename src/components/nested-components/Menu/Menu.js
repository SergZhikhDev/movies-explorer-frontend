import React from "react";

import "./Menu.css";
import MenuNavigation from "../MenuNavigation/MenuNavigation";
import MenuAuth from "../MenuAuth/MenuAuth";
import MenuResponce from "../MenuResponce/MenuResponce";

function Menu() {
  return (
    <>
      <MenuNavigation />
      <MenuAuth />
      <MenuResponce />
    </>
  );
}

export default Menu;
