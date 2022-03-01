import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import styles from "../../../styles/navbarStyles/navbarUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  showUserDropDown,
  hideUserDropDown,
} from "./../../../redux/actions/userProfileDropdownActions";

const NavbarUser = ({ onClick }) => {
  const user = useSelector((state) => state.user);
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const userDropDown = useSelector((state) => state.showUserDropDown);
  console.log(userDropDown.showUserDropDown);
  const dispatch = useDispatch();
  return (
    <div className={styles.navbarUser} style={{ position: "relative" }}>
      <img
        className={styles.navbarUser__image}
        src={`/images/${user.profilePhoto}`}
        alt="profile"
        onClick={() =>
          userDropDown.showUserDropDown
            ? dispatch(hideUserDropDown())
            : dispatch(showUserDropDown())
        }
      />
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          userDropDown.showUserDropDown
            ? dispatch(hideUserDropDown())
            : dispatch(showUserDropDown())
        }
      >
        <span className="menu__link-title">Me</span>
        <BiChevronDown />
      </div>
      <div
        className={styles.navbarUser__dropDown}
        style={{
          display: userDropDown.showUserDropDown ? "block" : "none",
        }}
      >
        <div className={styles.navbarUser__dropDown__user_container}>
          <img
            src={`images/${user.profilePhoto}`}
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
    </div>
  );
};

export default NavbarUser;
