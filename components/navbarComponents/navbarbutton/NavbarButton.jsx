import styles from "../../../styles/navbarStyles/navbarbutton.module.css";
const NavbarButton = ({ isActive, children, title }) => {
  return (
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
  );
};

export default NavbarButton;
