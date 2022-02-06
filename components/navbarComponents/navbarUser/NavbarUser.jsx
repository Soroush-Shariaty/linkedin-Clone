import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import profile from "../../../public/images/User-img.jpg";
import styles from "../../../styles/navbarStyles/navbarUser.module.css";
const NavbarUser = () => {
  return (
    <div className={styles.navbarUser}>
      <Image
        className={styles.navbarUser__image}
        width={30}
        height={30}
        src={profile}
        alt="profile"
      />
      <div>
        <span className="menu__link-title">Me</span>
        <BiChevronDown />
      </div>
    </div>
  );
};

export default NavbarUser;
