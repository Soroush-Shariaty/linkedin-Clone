import NavbarButtonContainer from "../navbarButtonContainer/NavbarButtonContainer";
import {
  Searchbar,
  ToggleDarkMode,
} from "../../../components/navbarComponents/index";
import styles from "../../../styles/navbarStyles/navbar.module.css";

const Navbar = ({ active }) => {
  return (
    <div className={[styles.navbar, "section-padding"].join(" ")}>
      <div className={styles.navbar__searchbar_container}>
        <Searchbar />
        <ToggleDarkMode />
      </div>
      <NavbarButtonContainer active={active} />
    </div>
  );
};

export default Navbar;
