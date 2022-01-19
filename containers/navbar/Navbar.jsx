import NavbarButtonContainer from "./../navbarButtonContainer/NavbarButtonContainer";
import Searchbar from "./../../components/searchBar/Searchbar";
import styles from "../../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={[styles.navbar, "section-padding"].join(" ")}>
      <Searchbar />
      <NavbarButtonContainer />
    </div>
  );
};

export default Navbar;
