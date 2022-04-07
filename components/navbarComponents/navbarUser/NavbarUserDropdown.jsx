import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../../styles/navbarStyles/navbarUserDropdown.module.css";
import onClickOutside from "react-onclickoutside";
import { useTranslation } from "react-i18next";

function NavbarUserDropdown({ isOpen, setIsOpen }) {
  const user = useSelector((state) => state.user);
  const { t } = useTranslation("feed");
  NavbarUserDropdown.handleClickOutside = () => setIsOpen(false);
  return (
    <div
      className={styles.navbarUser__dropDown}
      style={{
        opacity: isOpen ? "1" : "0",
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div className={styles.navbarUser__dropDown__user_container}>
        <img
          src={`/images/${user.profilePhoto}`}
          className={styles.navbarUser__dropDown__user_container_image}
          alt="user"
        />
        <div className={styles.navbarUser__dropDown__user_container_details}>
          <h3>{user.name}</h3>
          <p>{user.description}</p>
        </div>
      </div>
      <button className={styles.navbarUser__dropDown__user_container_button}>
        <Link href={`/users/${user.ID}`}>{t("view_profile")}</Link>
      </button>
      <h3>{t("account")}</h3>
      <ul>
        <li>
          <Link href={"/"}>{t("settings_and_privacy")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("help")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("language")}</Link>
        </li>
      </ul>
      <h3>{t("manage")}</h3>
      <ul>
        <li>
          <Link href={"/"}>{t("posts_and_activities")}</Link>
        </li>
      </ul>
      <Link href={`/`}>
        <a>{t("sign_out")}</a>
      </Link>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => NavbarUserDropdown.handleClickOutside,
};

export default onClickOutside(NavbarUserDropdown, clickOutsideConfig);
