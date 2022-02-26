import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

import styles from "../../../styles/navbarStyles/navbarUser.module.css";
import profile from "../../../public/images/User-img.jpg";
import { useSelector } from "react-redux";

const NavbarUser = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.navbarUser}>
      <Image
        className={styles.navbarUser__image}
        width={30}
        height={30}
        src={`/images/${user.profilePhoto}`}
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
