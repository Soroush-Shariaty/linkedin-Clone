import Link from "next/link";
import styles from "../../../styles/navbarStyles/navbarbutton.module.css";
const NavbarButton = ({ isActive, children, title, href }) => {
  return (
    <Link href={href} passHref>
      <div
        className={
          isActive
            ? [styles.navbarButton, styles.active].join(" ")
            : styles.navbarButton
        }
      >
        <span>{children}</span>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default NavbarButton;
