import Image from "next/image";
import logo from "../../../public/images/LinkedIn_logo.png";
import styles from "../../../styles/navbarStyles/Searchbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbar__img}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.searchbar__container}>
        <AiOutlineSearch className={styles.searchbar__container_icon} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Searchbar;
