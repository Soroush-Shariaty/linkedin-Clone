import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../../styles/navbarStyles/navbarUserDropdown.module.css";
import onClickOutside from "react-onclickoutside";

function NavbarUserDropdown({ isOpen, setIsOpen }) {
  const user = useSelector((state) => state.user);
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
        View profile
      </button>
      <h3>Account</h3>
      <ul>
        <li>
          <Link href={"/"}>Setting & Privacy</Link>
        </li>
        <li>
          <Link href={"/"}>Help</Link>
        </li>
        <li>
          <Link href={"/"}>Language</Link>
        </li>
      </ul>
      <h3>Manage</h3>
      <ul>
        <li>
          <Link href={"/"}>Posts & Activity</Link>
        </li>
      </ul>
      <Link href={"/"}>
        <a>Sign Out</a>
      </Link>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => NavbarUserDropdown.handleClickOutside,
};

export default onClickOutside(NavbarUserDropdown, clickOutsideConfig);
