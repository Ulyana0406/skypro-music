import "../../App.css";
import NavMyPlaylist from "./MyPlaylist";
import SighInButton from "./SingIn";
import NavMain from "./Main";
function NavMenu() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <NavMain />
          <NavMyPlaylist />
          <SighInButton />
        </ul>
      </div>
    </nav>
  );
}
export default NavMenu;
