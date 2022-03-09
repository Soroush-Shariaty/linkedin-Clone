import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import styles from "../../../styles/navbarStyles/navbarUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import NavbarUserDropdown from "./NavbarUserDropdown";
import { useTranslation } from "react-i18next";

const NavbarUser = ({ onClick }) => {
  const user = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbarUser} style={{ position: "relative" }}>
      <img
        className={styles.navbarUser__image}
        src={`/images/${user.profilePhoto}`}
        alt="profile"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
        <span>{t("me")}</span>
        <BiChevronDown />
      </div>
      <NavbarUserDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default NavbarUser;
