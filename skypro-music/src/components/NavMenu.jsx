import { useState } from "react";
import "../App.css";
import NavMyPlaylist from "./MyPlaylist";
import SighInButton from "./SingIn";
import NavMain from "./Main";
import React from "react";
function NavMenu() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>

      <div className="nav__burger burger">
        <div
          onClick={() => {
            setVisible(!visible);
          }}
          role="button"
        >
          <img className="click_button" src="img/burger.png" alt="logo" />
        </div>
      </div>
      <div className="nav__menu menu">
        {visible && (
          <ul className="menu__list">
            <NavMain />
            <NavMyPlaylist />
            <SighInButton />
          </ul>
        )}
      </div>
    </nav>
  );
}
export default NavMenu;
