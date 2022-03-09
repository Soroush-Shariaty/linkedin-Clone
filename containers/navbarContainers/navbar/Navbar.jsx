import { NavbarButtonContainer } from "../index";
import {
  Searchbar,
  ToggleDarkMode,
} from "../../../components/navbarComponents/index";

import styles from "../../../styles/navbarStyles/navbar.module.css";
import SetLanguage from "../../../components/navbarComponents/setlanguage/SetLanguage";

const Navbar = ({ active }) => {
  return (
    <div className={[styles.navbar, "section-padding"].join(" ")}>
      <div className={styles.navbar__searchbar_container}>
        <Searchbar />
        <ToggleDarkMode />
        <SetLanguage />
      </div>
      <NavbarButtonContainer active={active} />
    </div>
  );
};

export default Navbar;
