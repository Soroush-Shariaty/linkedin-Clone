import Image from "next/image";
import profile from "../../public/images/User-img.jpg";
import styles from "../../styles/navbarUser.module.css";
import { BiChevronDown } from "react-icons/bi";
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
