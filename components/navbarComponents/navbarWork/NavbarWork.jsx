import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

import styles from "../../../styles/navbarStyles/navbarWork.module.css";
import { useTranslation } from "react-i18next";

const NavbarWork = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.navbarWork}>
      <span>
        <BsFillGrid3X3GapFill />
      </span>
      <div>
        <span className="menu__link-title">{t("work")}</span>
        <BiChevronDown />
      </div>
    </div>
  );
};

export default NavbarWork;
