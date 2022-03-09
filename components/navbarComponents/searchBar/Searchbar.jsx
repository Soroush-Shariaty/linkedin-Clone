import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef } from "react";
import styles from "../../../styles/navbarStyles/Searchbar.module.css";
import logo from "../../../public/images/LinkedIn_logo.png";
import { useTranslation } from "react-i18next";

const Searchbar = () => {
  let placeholder = "";
  const ref = useRef(null);
  useEffect(() => {
    placeholder = t("search");
    ref.current.placeholder = placeholder;
  }, []);
  const { t } = useTranslation();
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbar__img}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.searchbar__container}>
        <AiOutlineSearch className={styles.searchbar__container_icon} />
        <input ref={ref} type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Searchbar;
