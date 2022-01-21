import NavbarButtonContainer from "../navbarButtonContainer/NavbarButtonContainer";
import { Searchbar } from "../../../components/navbarComponents/index";
import styles from "../../../styles/navbarStyles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={[styles.navbar, "section-padding"].join(" ")}>
      <Searchbar />
      <NavbarButtonContainer />
    </div>
  );
};

export default Navbar;