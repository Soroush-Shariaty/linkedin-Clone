import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import styles from "../../../styles/navbarStyles/navbarWork.module.css";

const NavbarWork = () => {
  return (
    <div className={styles.navbarWork}>
      <span>
        <BsFillGrid3X3GapFill />
      </span>
      <div>
        <span className="menu__link-title">Work</span>
        <BiChevronDown />
      </div>
    </div>
  );
};

export default NavbarWork;
